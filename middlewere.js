module.exports = reqFilter = (req, res, next) => {
    if (!req.query.age){
        res.send('Please provid age');
    }
    else if (req.query.age < 18){
        res.send("You cann't access this page");
    }
    else{
        next();
    }
}