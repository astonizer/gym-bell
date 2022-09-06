require("dotenv").config();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Environment variables
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRY = process.env.JWT_EXPIRY;

// Create jwt token
const createToken = (_id) => {
  return jwt.sign({ _id }, JWT_SECRET, { expiresIn: JWT_EXPIRY });
};

/**
 *
 * @param {Object} req
 * @param {Object} res
 * @description Register new user in database
 *
 */

const register_post = async (req, res, next) => {
  console.log(req.body);
  const { username, email, password, role } = req.body;

  try {
    const user = await User.signup({ username, email, password, role });
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/**
 *
 * @param {Object} req
 * @param {Object} res
 * @description Login user
 */

const login_post = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  register_post,
  login_post,
};
