const router = require("express").Router();
const { body } = require("express-validator");
const usercontroller = require("../controller/usercontroller");

// varification by using otp
//registered by using otp
router.post("/registered/user",[body("email").isEmail().normalizeEmail(),
body("password").isLength({ min: 6 }),],usercontroller.registerbyOTP);
// otp varufication
router.post("/varifying/otp",usercontroller.verifybyOTP)
// resend otp
router.post("/resend/otp",usercontroller.resendOTP)
// login user
router.post("/login/user",[body("email").isEmail().normalizeEmail(),
body("password").isLength({ min: 6 }),], usercontroller.login);

module.exports = router;
