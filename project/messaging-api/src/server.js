const { connectDB, sequelize } = require('./config/database');
const app = require('./app');

const port = process.env.PORT || 3001;

const StartServer = async () => {
    await connectDB();
    await sequelize.sync(); // <-- Add this line here
    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
};

StartServer();