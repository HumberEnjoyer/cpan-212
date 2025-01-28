import express from 'express';
import dotenv from 'dotenv';
import lab_router from './routers/lab_router.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;


//imported router
// > localhost:3000/lab
app.use('/lab', lab_router);

app.get('/', (req, res) => {
    res.send('server is running');
});


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
    });