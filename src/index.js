const express = require('express')
const app = express()
const router = express.Router()
const index = require("./router/v1/index")

app.use("/api/v1/", index)


app.listen(3000, () => {
    console.log('server is running on port 3000')
})

module.exports =router
