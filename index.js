const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('I can start a node app')
})

app.listen(5000 , ()=> console.log('Listening to port no 5000'))