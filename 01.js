const express    = require('express');
const path       = require('path');
const ejs        = require('ejs');   

const app        = express();
const pubilePath = path.join(__dirname, 'public');

// console.log(pubilePath);
// app.use(express.static(pubilePath));

app.set('view engine', 'ejs');

 
app.get('', (req, res) => {
    res.sendFile(`${pubilePath}/index.html`);
});

app.get('/login', (req, res) => { 
    res.render('login');
})

app.get('/profile', (req, res) => {
    const user = {
        name : 'jack',
        email : 'jack@test.com',
        mobile: '9193-2825239',
        skills: ['java', 'js', 'node', 'php','python']
    }
    res.render('profile', {user});
});

app.get('*', (req, res) =>{
    res.sendFile(`${pubilePath}/404.html`);
});

app.listen(6060);