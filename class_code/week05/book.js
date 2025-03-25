import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {

        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        publisher: {
            type: String,
            required: true
        },
        pages: {
            type: String,
            required: true
        },
        releaseDate: {
            type: String,
            required: true
        },
        ISBN: {
            type: String,
            required: true
        },
    }
)

const Book = mongoose.model('books', bookSchema);
export default Book;