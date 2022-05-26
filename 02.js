const express = require('express');
const app     = express();

const reqFilter = require('./middlewere');
const route     = express.Router(); 
//app.use(reqFilter);

app.use(reqFilter);

app.get('/', (req, res) =>{
    res.send('Welcom to HomePage');
});

route.get('/users', (req, res) => {
    res.send('Welcom to UserPage');
});

app.use('/', route);

app.listen(5040);