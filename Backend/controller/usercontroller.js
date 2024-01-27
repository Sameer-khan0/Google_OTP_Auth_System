const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt=require('jsonwebtoken')
const Otp=require('../models/otp')
const SendOTP=require('../utils/SendOTP')

exports.registerbyOTP = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (user) {
      return res.status(409).json({ message: "User with given email already exists!" });
    }
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);
    user = await new User({
      username: username,
      email: email,
      password: hashPassword,
    }).save();
    await SendOTP(user,res)
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
  
exports.verifybyOTP = async (req, res) => {
  try {
    const { userId, otp } = req.body;
    console.log(userId,otp)
    const storedOTP = await Otp.findOne({ userId });
    if (!storedOTP) {
      return res.status(400).json({ message: 'OTP not found' });
    }
    const hashadotp=storedOTP.otp
    const isOTPValid = await bcrypt.compare(otp, hashadotp);
    if (isOTPValid) {
      await User.updateOne({ _id: userId, verified: true });
      await Otp.deleteMany({userId});
      return res.status(200).json({ status:"ok",message: 'OTP verification successful' });
    } else {
      return res.status(401).json({ message: 'Incorrect OTP' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.resendOTP = async (req, res) => {
  try {
    const { userId} = req.body;
    if (!userId) {
      throw new Error("UserID missing");
    }
    await Otp.deleteMany({ userId });
    const user = await User.findById(userId);
    if (user) {
      await SendOTP(user,res)
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

  
exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      try {
        const user = await User.findOne({ email: email });
        if (user) {
          const comparePassword = await bcrypt.compare(password, user.password);
          if (comparePassword) {
            const isVerified = user.verified;
            if (isVerified) {
              const userData={
                id:user._id
              }
              const Authtoken= jwt.sign(userData,process.env.JWT_KEY)
              res.status(200).send({ status: "ok", message: "Logged in successfully", token:Authtoken });
            } else {
              res.status(400).send({ message: "Not verified" });
            }
          } else {
            res.status(400).send({ message: "Wrong Password" });
          }
        } else {
          res.status(400).send({ message: "User not found" });
        }
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Internal Server Error" });
    }
};
  
  
  