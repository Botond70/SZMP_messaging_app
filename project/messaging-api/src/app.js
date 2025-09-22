const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req,res) =>{
    res.send('Test get call');
});

app.listen(port, ()=>{
    console.log(`now listening on port:${port}`);
});
