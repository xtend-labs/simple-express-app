const express = require('express')
const app = express()
const port = 8080

// app.get('/', (req, res) => {
//   res.send('Hello World again! Another change. Hi')
// })

// app.use(express.static('./src/public'));

app.get('/hey', (req, res) => res.send('ho!'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})