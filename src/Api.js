const sql = require('mysql');
const express = require("express");
const bodyParser = require('body-parser'); 
const helmet = require('helmet');
const morgan = require('morgan');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const app = express(); 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
//logs HTTP requests
app.use(morgan('combined'));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }

});

var con = sql.createConnection({
    host: "road2hire.ninja",
    user: "r2hstudent",
    password: "SbFaGzNgGIE8kfP",
    database: "mriente"
});

con.connect((error) => {
    if (error) {
        throw error
      }
    console.log("Connected!");
});

app.get('/products', (req, res) => {
    con.query("SELECT * FROM products", (error, results) => {
        if (error) {
            throw error
        }
        res.send(JSON.stringify(results));
    });
})

app.get('/contact_Data', (req, res) => {
    con.query("SELECT * FROM contact_data", (error, results) => {
        if (error) {
            throw error
        }
        res.send(JSON.stringify(results));
    });
})

app.get('/products/:id', (req, res) => {
    con.query('SELECT * FROM products WHERE prod_id =' + req.params.id, (err, results) => {
        if(err) {
            console.log(err.code);
        }
        res.send(JSON.stringify(results));
    });
})

//validates IP tokens
const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://mjriente.auth0.com/.well-known/jwks.json`
    }), 
    // Validate the audience and the issuer.
    audience: 'wL4xrbtQkjFNwWZ46CoDWs3TNu1OTF7C',
    issuer: `https://mjriente.auth0.com/`,
    algorithms: ['RS256']
});

//placing checkJwt in the endpoint makes sure unauthenticated users cannot access them
app.post('/contact_data', (req, res) => {
    const contact = {
        first_name: req.body.fname,
        last_name: req.body.lname,
        email: req.body.email,
        company: req.body.company,
        comment: req.body.comment
    }
    con.query('INSERT INTO contact_data SET ?', contact, (error, results) => {
        if (error) {
          throw error
        }
        res.redirect('http://localhost:3000/Contact');
        res.sendStatus(200);
        res.end(JSON.stringify(results));
      });
})

app.post('/products', checkJwt, (req, res) =>{
    const product = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        price: req.body.price,
        prodType: req.body.prodType,
        productImage: req.body.productImage,
        productImageCaption: req.body.productImageCaption,
        availability: req.body.availability
    }
    con.query("INSERT INTO `products` SET ?", product, (error, results) => {
        if (error) {
            throw error
        }
        res.redirect('http://localhost:3000/Admin');
        res.sendStatus(200);
        res.end(JSON.stringify(results));
    });
})

app.put('/products/:id', checkJwt, (req, res) => {
    let query = "UPDATE products SET title = '"+req.body.title+"', author = '"+req.body.author+"', description = '"
    +req.body.description+"', price = '"+req.body.price+"', prodType = '"+req.body.prodType+"', productImage = '"+req.body.productImage+
    "', productImageCaption = '"+req.body.productImageCaption+"', availability = '"+req.body.availability+"' WHERE prod_id = '"+req.params.id+"'";
    con.query(query, (error, results) => {
        if (error) {
            throw error
        }
        res.send(JSON.stringify(results));
    });
})

app.delete('/products/:id', checkJwt, (req, res) => {
    let query = "DELETE FROM products WHERE prod_id=" + req.params.id
    con.query(query, (error, result) => {
        if (error) {
            throw error
        }
        res.redirect('http://localhost:3000/Admin');
        res.end('Product Deleted');
    })
})

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});
