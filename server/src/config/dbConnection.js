const mongoose = require("mongoose");
const URL = "mongodb+srv://AliHamza:Abb5785@apiexpress.zmmdfkh.mongodb.net/young-dev-db?retryWrites=true&w=majority&appName=ApiExpress";

const conDb = async () => {
    try {
        await mongoose.connect(URL);
        console.log("DataBase Connection Successfull");
    } catch (error) {
        console.error("DataBase Connection Failed", error.message);
        process.exit(0);
    }
};

module.exports = conDb;
