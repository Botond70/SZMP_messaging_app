require('dotenv').config({path: '../.env'});
const {Sequelize} = require('sequelize');


console.log(process.env.DB_NAME);
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        logging: true,
    }
);

const connectDB = async () => {
    try{
        await sequelize.authenticate();
        console.log("Connected to DB");

    }catch(err){
        console.error("Failed to connect to DB:", err);
        process.exit(1);
    }
}

module.exports = {connectDB, sequelize};