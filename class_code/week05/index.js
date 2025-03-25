import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Book_router from './book_router.js';
import user_router from './user_router.js';




dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

//midleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));




//routes
app.get('/', (req, res) => {
    Book.find().then((results) => {
        res.json(results);
    });
});

app.use("/user", user_router);

app.use("/book", Book_router);

//start up 
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    })
})