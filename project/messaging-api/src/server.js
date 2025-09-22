const {connectDB, sequelize} = require('./src/config/database');
const app = require('./app');

const port = process.env.PORT || 3000;

const StartServer = async () => {
    await connectDB()
    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
};

StartServer();