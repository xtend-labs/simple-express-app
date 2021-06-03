const express = require('express')
// const cors = require('cors')
const app = express()
const port = 8080


//
app.get('/hey', (req, res) => res.status(200).json('ho!'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})