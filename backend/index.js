const express = require('express')
const axios = require("axios")
const app = express()
const port = 3000
const wordmap = require('./Count')

app.get('/', (req, res) => {
    console.log(wordmap);
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



