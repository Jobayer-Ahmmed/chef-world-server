import express from "express"
import TableModel from "../../../models/Table.js"

const router = express.Router()

router.post("/book_table", async(req, res)=>{
    const getData = req.body
    const mongoData = new TableModel(getData)
    const result = await mongoData.save()
    res.send(result)
})

export default router