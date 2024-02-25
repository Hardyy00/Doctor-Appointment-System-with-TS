const express = require("express");
const app = express();

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`Server connected at port : ${PORT}`);
});
