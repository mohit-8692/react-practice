// controllers/userController.js
const User = require('../models/User');

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  registerUser,
};
