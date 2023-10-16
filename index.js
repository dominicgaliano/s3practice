const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3000;

// middleware
app.use(morgan("tiny"));
app.use(express.static("static"));
app.use(express.urlencoded({ extended: true }));

// routes
app.post("/files", (req, res) => {
  // implement s3 uploading

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
