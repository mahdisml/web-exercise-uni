const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser");
const handlebars = require('express-handlebars');
const fs = require("fs");
let data;

fs.readFile(path.join(__dirname, '/items.json'), (err, newData) => {
    if (err) throw err;
    data = JSON.parse(newData);
    console.log(data);
});

function updateJson(){
    let newData = JSON.stringify(data, null, 2);
    fs.writeFile(path.join(__dirname, '/items.json'), newData, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
}

app.use(bodyParser.urlencoded({ extended: true }))
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views',
    extname: 'hbs'
}));
app.use(express.static(path.join(__dirname, '/public')))
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'hbs')
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


app.get('/', (req, res) => {
    res.render('main',{data:data})
})
app.get('/forooshgah', (req, res) =>{
    res.render('main',{})
})
app.get('/modiriatMahsool', (req, res) =>{
    res.render('main',{})
})
app.get('/akharinMahsool', (req, res) =>{
    res.render('main',{})
})
app.get('/blog', (req, res) =>{
    res.render('main',{})
})
app.get('/safheha', (req, res) => {
    res.render('main',{})
})
app.get('/ertebatBaMa', (req, res) => {
    res.render('main',{})
})

// app.get('/manageitem', (req, res) =>res.render('manageitem'))
// app.post('/additem', (req, res) => {
//     let lid =
//         data.push({
//             id: data[data.length - 1].id + 1,
//             name: req.body.name,
//             cost: parseInt(req.body.price)
//         })
//     console.log(data)
//     res.render('index', data)
// })