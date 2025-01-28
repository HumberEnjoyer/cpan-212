
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;


// CRUD

app.get('/', (req, res) => {
    res.send('Hello World GET');
});
app.post('/', (req, res) => {
    res.send('Hello World POST');
    
});
app.put('/', (req, res) => {
    res.send('Hello World PUT');
    
});
app.delete('/', (req, res) => {
    res.send('Hello World DELETE');
    
});
app.get('/search', (req, res) => {
    console.log(req.url);
    console.log(req.headers);
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    res.send('Hello World SEARCH');
});
app.get('/item/:itemID', (req, res) => {
    console.log(req.url);
    console.log(req.headers);
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    res.send('item round');
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
    });