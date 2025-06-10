import { Router } from "express";
import { getBooks, getOneBook, postBook, deleteBook, patchBook } from "../controllers/book.controllers.js";

const bookRouter = Router();

bookRouter.get('/books', getBooks);
bookRouter.post('/books', postBook);
bookRouter.delete('/books/:id', deleteBook);
bookRouter.get('/books/:id', getOneBook);
bookRouter.patch('/books/:id', patchBook);

export {bookRouter};