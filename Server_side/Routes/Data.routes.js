const express = require('express');
const userData = require('../Modules/data.module');

const userRoute = express.Router();



userRoute.get('/', (req, res) => {
    res.send('Welcome to our website');
});

// Create a new product
userRoute.post('/add', async (req, res) => {
    try {
        const { product_name, description, price, image_url, product_type, Old_days } = req.body;

        if (!product_name || !price) {
            return res.status(400).json({ error: 'Product name and price are required' });
        }

        const newProduct = new userData({
            product_name,
            description,
            price,
            image_url,
            product_type,
            Old_days
        });

        await newProduct.save();
        res.status(201).json({ message: 'Product added successfully', product: newProduct });
    } catch (error) {
        res.status(400).json({ error: 'Failed to add product' });
    }
});

// Read all products 
userRoute.get('/all', async (req, res) => {
    try {
        const products = await userData.find();
        res.status(200).json({ products });
    } catch (error) {
        res.status(400).json({ error: 'Failed to fetch products' });
    }
});

// Read a single product by ID 
userRoute.get('/:id', async (req, res) => {
    try {
        const product = await userData.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json({ product });
    } catch (error) {
        res.status(400).json({ error: 'Failed to fetch product' });
    }
});

// Delete a product (Delete product)
userRoute.delete('/delete/:id', async (req, res) => {
    try {
        const deletedProduct = await userData.findByIdAndDelete(req.params.id);

        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Failed to delete product' });
    }
});

module.exports = userRoute;
