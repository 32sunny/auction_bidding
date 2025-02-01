const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/auction");
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}
 
module.exports = connectDB
 