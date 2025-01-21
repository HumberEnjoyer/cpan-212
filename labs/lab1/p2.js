import http from "http";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();
const app = http.createServer((req, res)=>{
    if (req.url === "/"){
        res.end("server")
    }
    else if (req.url === "about"){
        let webpage = fs.readFileSync("about.html")
        res.end(webpage)
    }
    else if (req.url === "/home"){
        let webpage = fs.readFileSync("home.html")
        res.end(webpage)
    }
    else if (req.url === "register"){
        let webpage = fs.readFileSync("register.html")
        res.end(webpage)
    }
    else {
        res.end("page not found")
    }
});
const PORT = process.env.PORT || 9000;

app.listen(PORT, ()=>(
    console.log(`http://localhost:${PORT}`)
))
