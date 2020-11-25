const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser");
const handlebars = require('express-handlebars');
const fs = require("fs");
let data;
let lastRoute;
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
const reduceOp = function(args, reducer){
    args = Array.from(args);
    args.pop();
    let first = args.shift();
    return args.reduce(reducer, first);
};

app.use(bodyParser.urlencoded({ extended: true }))
app.engine('hbs', handlebars({
    helpers: {
        eq  : function(){ return reduceOp(arguments, (a,b) => a === b); },
        ne  : function(){ return reduceOp(arguments, (a,b) => a !== b); },
        lt  : function(){ return reduceOp(arguments, (a,b) => a  <  b); },
        gt  : function(){ return reduceOp(arguments, (a,b) => a  >  b); },
        lte : function(){ return reduceOp(arguments, (a,b) => a  <= b); },
        gte : function(){ return reduceOp(arguments, (a,b) => a  >= b); },
        and : function(){ return reduceOp(arguments, (a,b) => a  && b); },
        or  : function(){ return reduceOp(arguments, (a,b) => a  || b); },
    },
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
    lastRoute = 0
    res.render('main',{router:0,data:data,submit : function (){
            data.items.push({
                name: "ساعت درجه 1",
                price: 25,
                img: "images/watch12.jpg"
            })
            updateJson()
        }})
})
app.get('/forooshgah', (req, res) =>{
    lastRoute = 1
    res.render('main',{router:1,data:data})
})
app.get('/modiriatMahsool', (req, res) =>{
    lastRoute = 2
    res.render('main',{router:2,data:data})
})
app.get('/akharinMahsool', (req, res) =>{
    lastRoute = 3
    res.render('main',{router:3,data:data})
})
app.get('/blog', (req, res) =>{
    lastRoute = 4
    res.render('main',{router:4})
})
app.get('/safheha', (req, res) => {
    lastRoute = 5
    res.render('main',{router:5})
})
app.get('/ertebatBaMa', (req, res) => {
    lastRoute = 6
    res.render('main',{router:6})
})
app.get('/search', (req, res) => {
    lastRoute = 7
    res.render('main',{router:7})
})

app.get('/additem', (req, res) => {
    data.items.push({
        name: "ساعت درجه 1",
        price: 25,
        img: "images/watch12.jpg"
    })
    updateJson()
    res.render('main',{router:1,data:data})
    //res.render('main',{router:lastRoute})
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