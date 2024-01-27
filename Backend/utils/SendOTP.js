const sendEmail = require("./sendEmail");
const bcrypt = require("bcrypt");
const Otp=require('../models/otp')

module.exports = async (user, res) =>{
    try {
      const {email,_id}=user
      const otp=`${Math.floor(1000+Math.random()*9000)}`
      const otpSalt=10;
      const hashadOTP=await bcrypt.hash(otp,otpSalt)
      const newOTP=await new Otp({
        userId: _id,
        otp: hashadOTP,
        createdAt: Date.now(),
        expireAt: Date.now()+3600000
      })
      await newOTP.save()
      const isValid=await sendEmail(email,"OTP varification",`Your otp is <h2>${otp}</h2>`)
      if(isValid){
        res.status(200).json({status:'ok',message:`OTP is sended on ${email}`,userinfo:{id:_id,email:email}})
      }
      else{
        res.status(404).json({status:'error',message:`OTP is not sended`})
        throw new Error("OTP is not send")
      }
    } catch (error) {
      res.status(500).json({status:'error',message:error.message})
    }
  }
  