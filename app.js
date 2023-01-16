const express = require("express");

const bookingRoute = require("./routes/bookingRoute");
const app = express();
app.use(express.json());

app.use("/api/v1/booking", bookingRoute);
module.exports = app;
