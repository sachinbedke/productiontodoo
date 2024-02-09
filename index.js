const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")
require("dotenv").config({ path: "./.env" })


mongoose.connect(process.env.MONGO_URL)

const app = express()


app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, "dist")))
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"))
})

app.use("/api/admin", require("./router/todoRoute"))
mongoose.connection.once("open", () => {
    console.log("Mongoose Connected");
    app.listen(5000, console.log("server runinngs"))
})
