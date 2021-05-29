const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const ConnectDB = async()=>{
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected")
    }catch(e){
        console.log("Unable to connect database" + e)
    }
};

module.exports = ConnectDB;