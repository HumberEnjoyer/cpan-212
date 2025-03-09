import express from "express";
import upload from "../middleware/multer.js";

const router = express.Router();

// Existing single upload route
router.post("/single", upload.single("file"), (req, res) => {
  console.log("Uploaded File:", req.file);

  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  res.json({
    message: "Image uploaded successfully",
    filePath: `/uploads/${req.file.filename}`,
  });
});

// Multiple upload route 
router.post("/multiple", upload.array("files", 10), (req, res) => {
  // must match the field name you use in the <input type="file" multiple /> on the client
  console.log("Uploaded Files:", req.files);

  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: "No files uploaded" });
  }

  res.json({
    message: "Multiple files uploaded successfully",
    count: req.files.length,
  });
});

// Save random dog image route
router.post("/dog", upload.single("file"), (req, res) => {
  console.log("Uploaded Dog File:", req.file);

  if (!req.file) {
    return res.status(400).json({ error: "No dog file uploaded" });
  }

  res.json({
    message: "Dog image uploaded successfully",
    filePath: `/uploads/${req.file.filename}`,
  });
});

export default router;
