const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then((con) => {
    console.log(con);
  })
  .catch((err) => console.log(err));

const port = 8000;
app.listen(port, () => {
  console.log(`server is running on this${port}`);
});
