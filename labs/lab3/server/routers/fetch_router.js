import express from "express";
import fs from "fs";
import path from "path";
import _ from "lodash";
import { fileURLToPath } from "url"; // for file path

const router = express.Router();

// grab the current directory to this file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // this will link us to the router folder
// we need to move from /server/routers to /server/uploads
const upload_directory = path.join(__dirname, "../uploads");

router.get("/single", (req, res) => {
  // we read the directory items synchronously to not trip the async speed
  let files_array = fs.readdirSync(upload_directory);
  // error checking
  if (files_array.length == 0) {
    // adding return will stop the rest of the operations
    return res.status(503).send({
      message: "No images",
    });
  }

  let filename = _.sample(files_array);
  res.sendFile(path.join(upload_directory, filename));
});

// For sending individual files by filename
router.get("/file/:filename", (req, res) => {
  res.sendFile(path.join(__dirname, "../uploads", req.params.filename));
});

// Multiple random images route
router.get("/multiple", (req, res) => {
  // read the directory
  let files_array = fs.readdirSync(upload_directory);

  // If no files, return early
  if (files_array.length === 0) {
    return res.status(503).json({ message: "No images" });
  }

  // pick up to 3 random files from files_array
  // using lodash's sampleSize
  const randomFiles = _.sampleSize(files_array, 3);

  // return the filenames as JSON
  res.json(randomFiles);
});


export default router;
