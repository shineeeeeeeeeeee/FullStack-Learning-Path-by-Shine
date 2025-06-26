const dotenv = require('dotenv')
const mongoose = require('mongoose');

// load env config
dotenv.config();

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser : true
        });
        console.log(`MongoDB Connected!`)
    } catch (error) {
        console.error(error.message);
        process.exit(1)
    }
}

module.exports = connectDB;