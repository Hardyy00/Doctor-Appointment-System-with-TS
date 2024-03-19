const instance = require("../app");
exports.checkout = async (req, res) => {
  const options = {
    amount: 50000,
    currency: "INR",
  };

  con;

  //   const order = await instance.orders.create(options);

  res.status(200).json({ success: true });
};
