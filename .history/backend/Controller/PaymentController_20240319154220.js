const instance = require("../app.js");
exports.checkout = async (req, res) => {
  const options = {
    amount: 50000,
    currency: "INR",
  };

  //   const order = await instance.orders.create(options);
  console.log(instance);

  res.status(200).json({ success: true });
};
