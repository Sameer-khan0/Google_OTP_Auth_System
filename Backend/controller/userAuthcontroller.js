const User = require("../models/user");

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    const userData = user.toObject();
    delete userData.password;
    delete userData._id
    res.status(200).send({ userData });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
