const express = require("express");
const app = express();
const port = 3000;

// middleware
app.use(express.static("static"));
app.use(express.urlencoded({ extended: true }));

// routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
