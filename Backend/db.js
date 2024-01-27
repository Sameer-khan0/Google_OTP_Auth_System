const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const connection = await mongoose.connect(process.env.DBSL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    if (connection) {
      console.log("Connected to the database successfully");
    } else {
      console.log("Not connected to the database");
    }
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};
