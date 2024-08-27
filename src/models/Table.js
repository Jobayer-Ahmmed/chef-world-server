

const TableSchema = new Schema(
    {
        table_name: {type: string},
        food_name: {type: string},
        time: {type: string}
    }
)

const TableModel = model("TableModel", TableSchema)
export default TableModel