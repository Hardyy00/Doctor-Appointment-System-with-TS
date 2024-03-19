import instance from "../app";
exports.checkout = async (req, res) => {
  const options = {
    amount: 50000,
    currency: "INR",
  };

  const order = await instance.orders.create(options);
};
