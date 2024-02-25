const express = require("express");
const app = express();
const PORT = 8080;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`Server connected at port : ${PORT}`);
});
