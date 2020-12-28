const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser");
const handlebars = require('express-handlebars');
const fs = require("fs");
const mongodb = require("mongodb");

let lastRoute;
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mahdisml:smlkabirvapooya@cluster0.5hgds.mongodb.net/items?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true ,poolSize : 10});

/*

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mahdisml:smlkabirvapooya@cluster0.5hgds.mongodb.net/shop?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
    const collection = client.db("shop", {returnNonCachedInstance : true}).collection("items");
    // perform actions on the collection object
    client.close();

});

*/


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
    client.connect(err => {
        const collection = client.db("shop", {returnNonCachedInstance : true}).collection("items");
        // perform actions on the collection object
        collection.find().toArray((error, documents) => {
            console.log(documents)
            res.render('main',{router:0,data:documents})
            client.close();
        })
    })

})
app.get('/forooshgah', (req, res) =>{
    lastRoute = 1
    client.connect(err => {
        const collection = client.db("shop", {returnNonCachedInstance : true}).collection("items");
        // perform actions on the collection object
        collection.find().toArray((error, documents) => {
            console.log(documents)
            res.render('main',{router:1,data:documents})
            client.close();
        })
    })

})
app.get('/modiriatMahsool', (req, res) =>{
    lastRoute = 2
    client.connect(err => {
        const collection = client.db("shop", {returnNonCachedInstance : true }).collection("items");
        // perform actions on the collection object
        collection.find().toArray((error, documents) => {
            console.log(documents)
            res.render('main',{router:2,data:documents})
            client.close();
        })
    })

})
app.get('/akharinMahsool', (req, res) =>{
    lastRoute = 3
    client.connect(err => {
        const collection = client.db("shop", {returnNonCachedInstance : true}).collection("items");
        // perform actions on the collection object
        collection.find().toArray((error, documents) => {
            console.log(documents)
            res.render('main',{router:3,data:documents})
            client.close();
        })
    })
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
app.get('/modiriatMahsool-:id', (req, res) => {

    client.connect(err => {
        const collection = client.db("shop", {returnNonCachedInstance : true}).collection("items");
        // perform actions on the collection object

        collection.deleteOne({
            _id: new mongodb.ObjectID(req.params.id)
        },function (err) {

            if(err) console.log(err);

            collection.find().toArray((error, documents) => {
                console.log(documents)
                res.render('main',{router:2,data:documents})
                client.close();
            })
        })

    })

})

app.post('/modiriatMahsool',(req, res) => {
    let aks = "images/watch12.jpg";
    if (parseInt(req.body.aks) === 1)
        aks = "images/watch10.jpg";
    if (parseInt(req.body.aks) === 2)
        aks = "images/watch11.jpg";

    client.connect(err => {
        const collection = client.db("shop", {returnNonCachedInstance : true}).collection("items");
        collection.insertOne({
            name: req.body.name,
            price: parseInt(req.body.gheymat),
            img: aks
        })
        // perform actions on the collection object
        collection.find().toArray((error, documents) => {
            console.log(documents)
            res.render('main',{router:2,data:documents})
            client.close();
        })

    });
})