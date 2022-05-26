const express = require('express');
const mongodb = require('mongodb');
const dbConnect = require('./database/mongoDB');
const app = express();

app.use(express.json());

app.get('/', async (req, res)=> {
    let data = await dbConnect();
    data = await data.find().toArray();
    //console.log(data);
    res.send(data); 
});

app.post ('/', async (req, res) => {
    let data = await dbConnect();
    let result  = await data.insertOne(req.body);
    res.send(result);
    //console.log(req.body);
});

app.put('/', async (req, res) => {
    let data = await dbConnect();
    let result = await data.updateOne(
        {name : "hello"},
        {$set : {name : "hello"}}
        //{$set : req.body} //dynamic data using postman direct update
        );
    //console.log(req.body);  data check 
    res.send({result: "Update"});
});

app.delete("/:id", async(req, res) => {
    //console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    res.send(result);
}); 

app.listen(1010);     