const mongoose = require('mongoose');

const connectdb = async (DATABASE_URL) => {
    const DB_OPTIONS={
        dbName:process.env.DB_Name,
    }
    try {
        await mongoose.connect(DATABASE_URL,DB_OPTIONS);
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};

module.exports = connectdb;