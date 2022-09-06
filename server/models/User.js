const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "No username found"],
  },
  email: {
    type: String,
    unique: [true, "Email already registered"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email",
    ],
    required: [true, "No email found"],
  },
  password: {
    type: String,
    required: [true, "No password found"],
    minlength: [6, "Short password"],
  },
  role: {
    type: String,
    required: [true, "No role found"],
  },
});

/**
 *
 * @description Hash registered user's password
 *
 */
userSchema.statics.signup = async function (user) {
  const { email, password } = user;
  if (!email || !password) {
    throw Error("All required fields must be filled");
  }
  const userExists = await this.findOne({ email });
  if (userExists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const updatedUser = await this.create({ ...user, password: hash });
  return updatedUser;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All required fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect Email");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect Password");
  }

  return user;
};

const User = mongoose.model("user", userSchema);

module.exports = User;
