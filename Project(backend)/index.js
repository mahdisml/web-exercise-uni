const path = require('path')  
const express = require('express')
const app = express()
const port = 3000
const hbs = require('hbs')
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.get('/', (req, res) => res.render('index'))
app.get('/manageitem', (req, res) =>res.render('manageitem'))
let data =[
  {
    id: 1,
    name: 'lorem',
    price: 300
  },
  {
    id:2,
    name: 'lorem2',
    price: 350
  },
]
app.post('/additem', (req, res) => {
    lid = 
    data.push(
        {
            id: data[data.length - 1].id + 1,
            name: req.body.name,
            cost: parseInt(req.body.price)
        })
    console.log(data)
    res.render('index', data)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})