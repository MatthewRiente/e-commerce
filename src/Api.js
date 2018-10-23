var sql = require('mysql');
var express = require("express");
var bodyParser = require("body-parser");
var app = express(); 

app.use(bodyParser.json()); 

app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

var con = sql.createConnection({
    host: "road2hire.ninja",
    user: "r2hstudent",
    password: "SbFaGzNgGIE8kfP",
    database: "mriente"
});

con.connect((err) => {
    console.log("Connected!");
});

app.get('/products', (req, res) => {
    con.query("SELECT * FROM products", (err, results, fields) => {
        res.send(JSON.stringify(results));
    });
})

app.post('/products', (req, res) =>{
    let query = "INSERT INTO `products` (title, author, description, price, prodType, productImage, productImageCaption, availability) VALUES ('"
    +req.body.title+"', '"+req.body.author+"', '"+req.body.description+"', '"+req.body.price+"', '"
    +req.body.prodType+"', '"+req.body.productImage+"', '"+req.body.productImageCaption+"', '"+req.body.availability+"')";
    con.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.redirect('http://localhost:3000/Admin');
    });

})

app.get('/products', (req, res) => {
    let query = "UPDATE `products` SET title = '"+req.body.title+"', author = '"+req.body.author+"', description = '"
    +req.body.description+"', price = '"+req.body.price+"', prodType = '"+req.body.prodType+"', productImage = '"+req.body.productImage+
    "', productImageCaption = '"+req.body.productImageType+"', availability = '"+req.body.availability+"'";
    con.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(JSON.stringify(result));
        res.redirect('http://localhost:3000/Admin');
    });
})
  
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});
