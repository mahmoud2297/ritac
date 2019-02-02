const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
    name: {                    
        type: String,
        required: true,
    },
    description: {
        type : String,
        required : true
    },
    image: {
        type : String,
        required : true
    },
    price: {
        type: Number,
        require: true
    },
    type: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    info : {
        type: String,
        required: true
    }
},{
    timestamps: true
});


var Products = mongoose.model('Products', productSchema);

module.exports = Products;