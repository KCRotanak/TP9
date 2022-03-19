const mongoose = require('mongoose')

module.exports = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/TP9');
        console.log("MongoDB connected><");
    } catch (error) {
        console.log("MongoDB err: ", error);
    }
}