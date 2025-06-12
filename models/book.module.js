import { Schema, model } from "mongoose"
import normalize from "normalize-mongoose"

const bookSchema = new Schema({
    bookTitle: {
        type: String,
        required: true
    },
    authorNameTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required:true
    },

    selectCategory: {
        type: String,
        enum:  ["Sci-Fic", "Education", "Business", "Technology", "Drama", "Finance", "Fantasy", "Romance"],
        required: true
    },

    publishYear: {
        type: Date,
        required: true
    },

    isbn: {
        type: String,
    },
    
    cover: {
        type: String,
        required: true
    },

    
}, {timestamps: true})

bookSchema.plugin(normalize);

export const Book = model ('Book', bookSchema);