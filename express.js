const express = require('express');
const app = express();

app.get('', (req, res) =>{
    res.send('<h1>Welcome Page</h1><a href="/form">go to form page</a>');
});


app.get('/form', (req, res) => {
    res.send(`
    <input type="text" placeholder="UserName">
    <button type="submit">Submit</button> <br>
    <a href="/like">go to like page</a>`);
});

app.get('/like', (req, res) => {
    res.send(`<h2> Like page!</h2>
    <a href='/about'>go to about page</a>`);
});

app.get('/about', (req, res) => {
    res.send(
        [
        {
            name: "jack",
            email: "jack@gmail.com",
            mobile: "6131-23456"
        },
        {
            name: "peter",
            email: "peter@test.in",
            mobile: "6121- 67890"
        }
    ]);
});

/*app.get('/name', (req, res) => {
    console.log("Data sent by user :", req.query.name + '<p>url typing : /?name=your name. print into console </p>');
    //url typing /?name=...
    res.send('<h1> Hello Node.js, </h1>' + req.query.name);
});*/

app.listen(7070);