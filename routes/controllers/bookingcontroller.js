const row = require("../../models/bookingModel");

exports.getbooking = async (req, res) => {
  const allrows = await row.find();

  res.status(200).json({
    status: "success",
    totalAvailableseat: 80,
    data: {
      allrows,
    },
  });
  //   res.json({
  //     status: "success",
  //     totalAvailableseat: 80,
  //     data: {
  //       coach,
  //     },
  //   });
};

exports.createrow = async (req, res) => {
  try {
    const newrow = await row.create(req.body);
    console.log(newrow);

    res.json({
      status: "success",
      data: {
        coachrow: newrow,
      },
    });
  } catch (error) {
    res.json({
      status: 404,
      message: error,
    });
  }
};
