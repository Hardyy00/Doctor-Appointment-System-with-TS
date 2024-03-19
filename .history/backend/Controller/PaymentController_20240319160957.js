const { instance } = require("../app.js");
exports.checkout = async (req, res) => {
  const options = {
    amount: 50000,
    currency: "INR",
  };

  console.log(app);

  //   const order = await instance.orders.create(options);
  res.status(200).json({ success: true });
};
