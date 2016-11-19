var express = require('express');
var app = express();

var session = require('express-session');
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(express.static('./static'));

app.use(session({
	secret: 'keyboard cat',
	cookie: {
		maxAge: 60000
	},
	resave: true,
	saveUninitialized: false
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(function (req, res, next) {
    res.tpl = {};
    return next();
});

app.use(express.static('./images'));

require('./routes/outside')(app);
require('./routes/petlist')(app);
require('./routes/userlist')(app);

app.use(
    function (err, req, res, next) {
        res.status(500).send('Hiba + kitalálni értelmes hibaüzenetet!');
        console.error(err.stack);
    }
)

var server = app.listen(3000, function () {
    console.log('Running on: 3000');
});