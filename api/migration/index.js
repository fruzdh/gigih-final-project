require("dotenv").config();

const mongoose = require("mongoose");
const migrate = require("./migrate");

const main = async () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("connected to database");
    })
    .catch((err) => {
      console.error("failed to connect to the database: ", err);
    });

  if (mongoose.connection) {
    try {
      await migrate();
    } catch (e) {
      console.error("data migration failed: " + e);
    }

    mongoose.disconnect();
    if (!mongoose.connection) {
      console.log("diconnected  to database");
    }
  }
};

main()
  .then(() => console.log("data migration success"))
  .catch((e) => console.error("data migration failed: " + e));
