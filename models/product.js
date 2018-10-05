const mongoose = require('mongoose');

// a schema is a blueprint for how you want a document to look like
var ProdSchema = new mongoose.Schema({
    title: {
        // the type of data is a string
        type: String,
        // wont submit if this data is not here
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    productType: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        require: true
    },
    productImageCaption: {
        type: String,
        required: true
    },
    availability: {
        type: String, 
        required: true
    }
})

const Prod = mongoose.model('Prod', ProdSchema);

module.exports = {
    Prod
};