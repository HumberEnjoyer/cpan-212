import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import save_router from "./routers/save_router.js";
import fetch_router from "./routers/fetch_router.js";


// So we can use __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8000;

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// API ROUTES
app.use("/save", save_router);
app.use("/fetch", fetch_router);

// Serve the React build folder
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// Simple /contact route to log request body
app.post("/contact", (req, res) => {
  console.log("Received contact form data:", req.body);
  res.json({ success: true, message: "Form data logged to console" });
});