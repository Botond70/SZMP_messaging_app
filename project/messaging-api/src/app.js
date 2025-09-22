const express = require('express');
const apiRoutes = require('./routes');
const cors = require('cors');
const app = express();
const {swaggerUi, specs} = require('./config/swagger');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs));
console.log('Swagger files loaded:', specs.paths); //


app.get('/', (req, res) => {
    res.send('API is running!');
})

module.exports = app;