const os = require("os");

const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const upload = multer({ dest: os.tmpdir() });

const app = express();
const port = 3000;

// middleware
app.use(morgan("tiny"));
app.use(express.static("static"));
app.use(express.urlencoded({ extended: true }));

// routes
app.post("/files", upload.single("file"), (req, res) => {
  // implement s3 uploading
  const file = req.file;
  const fileName = file.originalname;
  const filePath = file.path;

  console.log(fileName, filePath);

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
