import express from "express"
import TableModel from "../../../models/Table.js"

const router = express.Router()
router.get("/book_table", async(req, res)=>{
    const result = await TableModel.find()
    res.send(result)
})

export default router