const express = require("express");
const app = express();
const port = 3000;

// middleware
app.use(express.static("static"));
app.use(express.urlencoded({ extended: true }));

// routes
app.post("/files", (req, res) => {
  // implement s3 uploading

  console.log("upload route hit");
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
