const express = require('express');
require('./config');
const Product = require('./products');

const app = express();

app.use(express.json());

app.post('/create', async (req, res) => {
    let data = Product(req.body);
    let result = await data.save();
    //console.log(result);
    res.send(result);
});

app.get('/list', async (req, res) => {
    let data = await Product.find();
    res.send(data);
});

app.delete('/delete/:_id', async (req, res) => {
    let data = await Product.deleteOne(req.params);
    /* print in console 
    let data = await Product.deleteOne(req.params).then(data => {
        console.log(data);
        res.send(data);
    });
    */
    res.send(data);
});

app.put("/update/:_id", async (req, res) => {
    let data = await Product.updateOne(
        req.params,
    {
        $set : req.body
    });
    res.send(data); 
});

app.listen(5050); 