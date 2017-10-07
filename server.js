var express = require('express');

var app = express();

app.get('/', function(req, res, next) {
    res.json("home page");
});

app.get('/index', function(req, res, next) {
    res.json("index page");
});


// app.use to be coded before the URLto be targeted with app.get
// app.use(function(req, res, next) {
//     if (0 < 1) {
//         next();
//     } else {
//         res.json("You can't cross this border");
//     }
// })

function enteringMexicoBorder(req, res, next) {
    if (req.params.name === 'ok') {
        next();
    } else {
        res.redirect('www.google.com');
    }
}

app.get('/mexico:name', enteringMexicoBorder, function(req, res, next) {
    res.json('We have arrived! Geronimo !!')
})


app.get('/:name', function(req, res, next) {
    res.json(req.params.name);
});

app.listen(3000, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Running on port 3000");
    }
});