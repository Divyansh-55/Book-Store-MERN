import mongoose from "mongoose";
const bookSchema=mongoose.Schema({
    key:Number,
    title:String,
    category:String,
    price:Number,
    description:String,
    rating:Number,
    url:String
});

const Book=mongoose.model("Book",bookSchema);
export default Book;