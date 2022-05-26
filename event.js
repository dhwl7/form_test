const express = require('express');
const EventEmitter = require('events');
const app = express();

const event = new EventEmitter();

let count = 0;

event.on("countAPI", (req, res) => {
    count++;
    console.log("Event called", count);
})

app.get('/', (req, res) => {
    res.send('API is called !');
    event.emit("countAPI");
});

app.get('/search', (req, res) => {
    res.send('SearchAPI is called');
    event.emit("countAPI");
});

app.get('/update', (req, res) =>{
    res.send('UpdateAPI is called');
    event.emit("countAPI");
});

app.listen(7070);