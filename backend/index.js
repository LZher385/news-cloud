const express = require('express')
const axios = require("axios")
const app = express()
const port = 3000
const data = require('../top-headlines.json')

app.get('/', (req, res) => {
    console.log("test")
    const {status} = data
    console.log(status)
    res.send("test")
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
