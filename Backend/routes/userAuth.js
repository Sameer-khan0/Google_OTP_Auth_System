const router = require("express").Router();
const userAuth = require("../controller/userAuthcontroller");
const varifyingToken = require("../middleware/varifyingToken");

router.get("/getuser", varifyingToken, userAuth.getUser);
// router.get("/update/dp", varifyingToken, userAuth.updateDP);

module.exports = router;
