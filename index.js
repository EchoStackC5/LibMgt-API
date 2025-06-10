import express from "express"
import {bookRouter} from "./routes/book.routes.js"
import mongoose from "mongoose"
import 'dotenv/config'

const app = express()

const PORT = process.env.PORT || 8085

app.use(express.json());
app.use(bookRouter);

const mongo_URI = process.env.MONGO_URI
await mongoose.connect(mongo_URI);

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`)
});