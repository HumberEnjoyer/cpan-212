import http from "http";
import fs from "fs";

const app = http.createServer((req, res) => {
    if (req.url === '/') {
        let webpage = fs.readdfileSync("homepage.html")
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Simple Website</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        margin-top: 50px;
                    }
                    h1 {
                        color: #333;
                    }
                    p {
                        color: #666;
                    }
                </style>
            </head>
            <body>
                <h1>Welcome to My Simple Website</h1>
                <p>This is served from a Node.js HTTP server.</p>
            </body>
            </html>
        `);
    } else if (req.url == '/about') {
        res.end('welcome to about us')
    }
    else if (req.url == '/user/account') {
        req.end(' my name is this')
    }
    
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 - Page Not Found");
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
