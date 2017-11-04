var express = require('express'),
    cors = require('cors'),
    app = express(),
    port = process.env.PORT || 5000,
    mongoose = require('mongoose'),
    Deputy = require('./api/models/deputyModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
//ToDo: create ENV VAR to connection string
mongoose.connect(process.env.DB_CONNECTION_STRING || 'mongodb://localhost/crawlernodeapi', {
    useMongoClient: true
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var deputyRoutes = require('./api/routes/deputyRoutes');
new deputyRoutes(app);

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(port);

console.log('Crawler RESTful API server started on: ' + port);