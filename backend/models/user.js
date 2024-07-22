const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
        }
});

userSchema.pre('save', async function(next){
    const user = this;

    // Hash the password only if it has been modified (or is new)
    if(!user.isModified('password')) return next();

    try{
        // hash password generation
        const salt = await bcrypt.genSalt(10);

        // hash password
        const hashedPassword = await bcrypt.hash(user.password, salt);
        
        // Override the plain password with the hashed one
        user.password = hashedPassword;
        next();
    }catch(err){
        return next(err);
    }
})

userSchema.methods.comparePassword = async function(userpassword){
    try{
        // Use bcrypt to compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(userpassword, this.password);
        return isMatch;
    }catch(err){
        throw err;
    }
}

// Check if the model is already compiled
const User = mongoose.model('User', userSchema);

module.exports = User;