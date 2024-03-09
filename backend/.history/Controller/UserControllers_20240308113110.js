exports.create = (req, res) => {
  const { name, email, password, role, gender, image } = req.body;

  try {
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
