const os = require("os");

const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const upload = multer({ dest: os.tmpdir() });

const { uploadFile, downloadFile } = require("./s3");

const app = express();
const port = 3000;

// middleware
app.use(morgan("tiny"));
app.use(express.static("static"));
app.use(express.urlencoded({ extended: true }));

// routes
app.post("/files", upload.single("file"), async (req, res) => {
  // implement s3 uploading
  const file = req.file;

  await uploadFile(file);

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
