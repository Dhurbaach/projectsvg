const express = require('express');
const router = express.Router();
const Contact=require('../models/contactinfo');
const User=require('../models/user');
const Rentinfo=require('../models/rentalinfo');

// Home Route
router.get('/', (req, res) => {
  res.render('index');
});

// Login Route
router.get('/login2', (req, res) => {
  res.render('login2');
});

// About Route
router.get('/about', (req, res) => {
  res.render('about');
});

// Ride Route
router.get('/ride', (req, res) => {
  res.render('ride');
});

//booknow
router.get('/booknow', (req, res) => {
  res.render('booknow');
  });

// FAQs Route
router.get('/faqs', (req, res) => {
  res.render('faqs');
});

// Packages Route
router.get('/packages', (req, res) => {
  res.render('packages');
});

// Contact Us Route
router.get('/contactus', (req, res) => {
  res.render('contactus');
});

// POST method for Contact Us
router.post('/contactus', async (req, res) => {
  const { firstname, lastname, phone, email, message } = req.body;

  // Check if all required fields are provided
  if (!firstname || !lastname || !phone || !email || !message) {
    return res.status(400).render('contactus', { error: "All fields are required." });
  }

  try {
    const contact = new Contact({ firstname, lastname, phone, email, message });
    await contact.save();
    res.render('index', { message: "Form has been submitted successfully!!!" });
  } catch (err) {
    console.error('Error saving contact info:', err);
    res.status(500).render('contactus', { error: "There was an error submitting the form. Please try again later." });
  }
});

//rentnow post route
router.post('/submit_rental', async (req, res) => {
  const { starttime,endtime,name,address,email,phone,district } = req.body;

  // Check if all required fields are provided
  if (!starttime||!endtime||!name||!address||!email||!phone||!district) {
    return res.status(400).render('booknow', { error: "All fields are required." });
  }

  try {
    const rentdata = new Rentinfo({  starttime,endtime,name,address,email,phone,district });
    await rentdata.save();
    res.render('index', { message: "Your bike has been booked successfully!!!" });
  } catch (err) {
    console.error('Error saving contact info:', err);
    res.status(500).render('booknow', { error: "There was an error submitting the form. Please try again later." });
  }
});

// Login POST Route
router.post('/login', async (req, res) => {
  try {
      // email and password from request body
      const {email,password } = req.body;

      // Find the user by email
      const user = await User.findOne({ email:email});

      // If user does not exist or password does not match, return error
      if (!user || !(await user.comparePassword(password))) {
          return res.status(401).json({ error: 'Invalid email or password' });
      }
      res.render('index', { message: "Logined successfully!!!" });
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

//signup route
router.post('/signup', async (req, res) => {
  try {
      const data = req.body // Assuming the request body contains the person data
      // Create a new user document using the Mongoose model
      const newUser = new User(data);

      // Save the new user to the database
      const response = await newUser.save();
      console.log('data saved');
      res.render('login2', { message: "Saved successfully!!!" });
  }
  catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
})

module.exports = router;
