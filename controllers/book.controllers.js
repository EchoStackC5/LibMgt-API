import { Book } from "../models/book.module.js";
import {bookSchema} from "../schemas/book.schema.js"

// GET /books (list)
export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: "Server error while fetching books." });
    }
};

// GET /books/:id (single)
export const getOneBook = async (req, res) => {
    const id = req.params.id;

    try {
        const book = await Book.findById(id);
        if (!book) return res.status(404).json({ error: "Book not found" });
        res.json(book);
    } catch (err) {
        res.status(400).json({ error: "Invalid ID or server error", details: err.message });
    }
};

// POST /books (add)
export const postBook = async (req, res) => {
    const {error, value} = bookSchema.validate(req.boby);
    if (error) return res.status(400).json({error: error.details[0].message});
    
    try {
        const addBook = await Book.create(req.body);
        res.status(201).json(addBook);
    } catch (err) {
        res.status(400).json({ error: "Validation failed", details: err.message });
    }
};

// DELETE /books/:id (delete)
export const deleteBook = async (req, res) => {
    const id = req.params.id;

    try {
        const book = await Book.findByIdAndDelete(id);
        if (!book) return res.status(404).json({ error: "Book not found" });
        res.json({ message: "Book deleted", book });
    } catch (err) {
        res.status(400).json({ error: "Invalid ID or server error", details: err.message });
    }
};

// PATCH /books/:id (edit)
export const patchBook = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });

        if (!updatedBook) {
            return res.status(404).json({ error: "Book not found" });
        }

        res.json(updatedBook);
    } catch (err) {
        res.status(400).json({ error: "Invalid ID or validation failed", details: err.message });
    }
};
