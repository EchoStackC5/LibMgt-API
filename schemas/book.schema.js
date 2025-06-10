import Joi from "joi";

const bookSchema = Joi.object({
    title: Joi.string().min(3).required().messages({
        "string.empty": "title cannot be empty",
        "any.required": "Title is required",
        "string.min": "Title must be at least 3 characters long"
    }),

    authorNameTitle: Joi.string().min(3).required().messages({
        "string.empty": "Author Name cannot be empty",
        "any.required": "Author Name is required"
    }),


    description: Joi.string().required().messages({
        "string.empty": "Description cannot be empty",
        "any.required": "Description is required"
    }),

    selectCategory: Joi.string().valid("Sci-Fic", "Education", "Business", "Technology", "Drama", "Finance", "Fantasy", "Romance").required().messages({
        "string.empty": "Category cannot be empty",
        "any.required": "Category is required"
    }),

    publishYear: Joi.string().required().messages({
        "string.empty": "Publish Year cannot be empty",
        "any.required": "Publish Year is required"
    }),

    isbn: Joi.string().optional(),

    cover: Joi.string().required().messages({
        "string.empty": "Cover Image cannot be empty",
        "any.required": "Cover Image is required"
    }),

})

export { bookSchema };