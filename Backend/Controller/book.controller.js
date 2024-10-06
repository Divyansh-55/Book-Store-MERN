import Book from "../Modal/book.modal.js";

export const premiumBooks = async (req, res) => {
    try {
        const books = await Book.find({price:{$gt:0}});
        res.status(200).json(books);
    } catch (error) {
        console.error("Error", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
export const getFreeBook=async(req,res)=>{
    try{
        const freeBooks=await Book.find({price:0})
        res.status(200).json(freeBooks);
    }
    catch{
        console.error("Error", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}