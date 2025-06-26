const {Schema,model} = require("mongoose");

// created schema
const productSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

// created model using schema
const productModel = model("product", productSchema)

module.exports = productModel