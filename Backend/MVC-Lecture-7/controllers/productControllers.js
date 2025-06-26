const product = require('../models/productModel')

// business logic

const getProducts = async(req, res) => {
    try {
        const allProducts = await product.find(); // fetch all products
        if(!allProducts || allProducts.length === 0)
            res.json({message: "There are no products!"})
        res.status(200).json({success: true, product: allProducts});
    } catch (error) {
        res.status(500).json({success: false, message: err.message})
    }
}

const createProducts = async(req, res) => {
    try {
        const {name, price, description, category} = req.body; 
        
        const newProduct = new product({name, price, description, category});
        await newProduct.save();

        res.status(200).json({success: true, product: newProduct});
    } catch (error) {
        res.status(500).json({success: false, message: err.message})
    }
}

const updateProducts = async(req, res) => {
    const {id} = req.params;
    const {name, price, description, category} = req.body; 

    try {
        const updatedProduct = await product.findByIdAndUpdate(id, {name, price, description, category}, {new:true});

        if(!updatedProduct) 
            res.json({message: "Product not found!"})

        res.status(200).json({
            success: true,
            product: updatedProduct
        })

    } catch (error) {
        res.status(500).json({success: false, message: err.message})
    }
}

const deleteProducts = async(req, res) => {
    const {id} = req.params;

    try {
        const deletedProduct = await product.findByIdAndDelete(id);

        if(!deletedProduct) 
            res.json({message: "Product not found!"})

        res.status(200).json({
            success: true,
            product: deletedProduct
        })

    } catch (error) {
        res.status(500).json({success: false, message: err.message})
    }
}

module.exports = {getProducts, createProducts, updateProducts, deleteProducts}