// server/index.js
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import fetch_router from "./routers/fetch_router.js";

const app = express();
const PORT = process.env.PORT || 8000;

// So we can use __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// Use our router for all "/fetch" routes
app.use("/fetch", fetch_router);


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
