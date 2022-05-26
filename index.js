
const http     = require('http');
const fs       = require('fs');
const colors   = require('colors');
const data     = require('./data');   
//const chalk    =  require('chalk');

//console.log(chalk.blue('Color npm '));

function dataControl(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(JSON.stringify(data));
    res.write("<h1> This is a Node.js server </h1>");
    res.write('<h2> Next.js</h2>');
    res.end()
};

http.createServer(dataControl).listen(4000);


/*
var http = require('http');
var server = http.createServer();
console.log("here ")
server.on('request', function(req, res){
    res.end('hello world');
    // console.log(res)
    console.log('1221');
    console.log('new client');
});
console.log("here 2")

server.listen(8080);
*/