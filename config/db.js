require("dotenv").config();
const mongoose = require("mongoose");



const connectDB = async ()=>{
    try {
    
      const conn = await mongoose.connect(process.env.MONGO_CONNECTION_URL);
        console.log(`connectDB: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB

