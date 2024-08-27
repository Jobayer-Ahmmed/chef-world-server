import { Schema, model } from "mongoose"


const TableSchema = new Schema(
    {
        table_name: {type: String},
        food_name: {type: String},
        time: {type: String}
    }
)

const TableModel = model("TableModel", TableSchema)  //  this the collection. that means, model = collection
export default TableModel