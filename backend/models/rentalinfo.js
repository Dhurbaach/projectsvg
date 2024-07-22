const mongoose=require('mongoose');
const rentSchema=new mongoose.Schema({
    starttime:{
        type:Date,
        required:true
    },
    endtime:{
        type:Date,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    district:{
        type:String,
        required:true
    }
});

const Rentmodel = mongoose.model('Rentinfo', rentSchema);

module.exports = Rentmodel;