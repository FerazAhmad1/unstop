const express = require("express");
const { getbooking, createrow } = require("./controllers/bookingcontroller");
const router = express.Router();

router.route("/").get(getbooking).post(createrow);
module.exports = router;
