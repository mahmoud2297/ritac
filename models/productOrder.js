const mongoose = require('mongoose');
const Schema = mongoose.Schema;





const productOrderSchema = new Schema({
    name: {                    
        type: String,
        required: true,
    },
    email : {
        type : String , 
        required : true 
    },
    address : {
        type : String , 
        required : true
    },
    numberOfProducts:{
        type : Number,
        required : true
    },
    productName:{
        type : String,
        required : true
    },

},{
    timestamps: true
});


var productOrder= mongoose.model('productOrder', productOrderSchema);

module.exports = productOrder;