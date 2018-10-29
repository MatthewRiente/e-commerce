const express = require('express')
const bodyParser = require('body-parser')
const _ = require('lodash')

//runs the db file
require('../db/mongoose');
const {Prod} = require('../models/product')
const {User} = require('../models/user')
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ 
    //grabs form data from the form url 
    extended: true
   }));

//CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept');
    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
  });

app.get('/products', (req, res) =>{
    // this grabs the model (prod) and finds everything (because empty object)
    Prod.find({}).then(products => res.send(products)).catch(err => res.status(400).send(err))
})

app.get('/users', (req, res) => {
    User.find({}).then( users => res.send(users)).catch(err => res.status(400).send(err))
})

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    // finds the id in the mongo server, then gives the data
    Prod.findById(id).then(product => {
        // if a product was found, send it
        // if not, send an error
        if (product) {
            res.send(product);
        } else {
            res.status(404).sendStatus('unable to find id')
        }
    }).catch(err => res.status(400).send(err))
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    // finds the id in the mongo server, then gives the data
    User.findById(id).then(user => {
        // if a product was found, send it
        // if not, send an error
        if (user) {
            res.send(user);
        } else {
            res.status(404).sendStatus('unable to find id')
        }
    }).catch(err => res.status(400).send(err))
})

app.delete('/products/:id', (req, res) => {
    const id = req.params.id;

    //finds the product by the id and removes it
    Prod.findByIdAndDelete(id).then(productDeleted => {
        if (productDeleted) {
            res.send(productDeleted);
        } else {
            res.status(404).sendStatus('unable to find id')
        }
    }).catch(err => res.status(400).send(err))
})

app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    User.findByIdAndDelete(id).then(userDeleted => {
        if (userDeleted) {
            res.send(userDeleted);
        } else {
            res.status(404).sendStatus('unable to find id')
        }
    }).catch(err => res.status(400).send(err))
})

app.post('/products/', (req, res) => {
    console.log(req.body);
    const {title, author, description, price, productType, productImage, productImageCaption, availability} = req.body;
    // makes a new product using the Prod model
    const product = new Prod({
        title,
        author,
        description,
        price,
        productType,
        productImage,
        productImageCaption,
        availability
    })
    product.save().then(() => res.status(200).redirect("http://localhost:3000/Admin"));

})

app.post('/users/', (req, res) => {
    console.log(req.body);
    const {fname, lname, company, email, comment} = req.body;
    const user = new User({
        fname,
        lname,
        email,
        company,
        comment
    })
    user.save().then(() => res.status(200).redirect("http://localhost:3000/Contact"))
})

app.put('/products/:id', (req, res) => {
    const id = req.params.id;
    let body = _.pick(req.body, ["_id", "title", "author", "description", "price", "productType", "productImage", "productImageCaption",  "availability"]);    
    Prod.findByIdAndUpdate(id,
    { $set: body }, { new: true })
    .then ((product) => {
        if (!product) {
            res.status(404).send("unable to find id");
        }
        res.send(product)
        console.log(product)
    }).catch(error => {res.status(400).send(error)});
});

app.listen(3001);