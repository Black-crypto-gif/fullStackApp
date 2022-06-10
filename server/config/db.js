const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect("mongodb+srv://mellalfethi:Fethi0780795322Mellal@cluster0.btgadqg.mongodb.net/mgmt_db?retryWrites=true&w=majority");
    console.log(`MongoDB Connected: ${conn.connection.host}`.bgRed.bold);
};

module.exports = connectDB;