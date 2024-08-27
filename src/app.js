import express from "express"
import applyMiddleWare from "./middlewares/applyMiddleWare.js"
import tablePost from "./routes/tableRoutes/tablePostRoute/index.js"
import tableGet from "./routes/tableRoutes/tableGetRoute/index.js"


const app =express()

applyMiddleWare(app)

app.use(tablePost)
app.use(tableGet)


app.get("/health", (req, res)=>{
    res.send("Chef World server is running")
})


app.all("*", (req, res, next)=>{
    const myErr = new Error(`The request URL is invalid : [${req.url}]`)
    myErr.status=404
    next(myErr)
})

app.use((err, req, res, next)=>{
    res.status(err.status || 500).json({message : err.message})
})

export default app