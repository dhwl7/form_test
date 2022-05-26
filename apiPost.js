const express = require('express');
const dbConnect = require('./database/mongoDB');
const app = express();


app.post('/', async(req, res) => {
    res.send({name : "abc"});
});

app.listen(1020);