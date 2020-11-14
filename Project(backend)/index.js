const path = require('path')  
const express = require('express')
const app = express()
const port = 3000
const hbs = require('hbs')
app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.get('/', (req, res) => res.render('index'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})