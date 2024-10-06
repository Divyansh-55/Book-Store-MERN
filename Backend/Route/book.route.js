import express from "express"
import { premiumBooks ,getFreeBook} from "../Controller/book.controller.js"

const router=express.Router();

router.get('/premium',premiumBooks);
router.get('/',getFreeBook);
export default router