var express = require('express'),
    cors = require('cors'),
    app = express(),
    port = process.env.PORT || 5000,
    mongoose = require('mongoose'),
    Deputy = require('./api/models/deputyModel'),
    bodyParser = require('body-parser'),
    router = express.Router();

mongoose.Promise = global.Promise;

var MONGO_DB;
var DOCKER_DB = process.env.DB_PORT;
if ( DOCKER_DB ) {
  MONGO_DB = DOCKER_DB.replace( 'tcp', 'mongodb' ) + '/crawlernodeapi';
} else {
  MONGO_DB = 'mongodb://localhost/crawlernodeapi';
}

mongoose.connect(MONGO_DB, {
    useMongoClient: true
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);

var deputyRoutes = require('./api/routes/deputyRoutes');
new deputyRoutes(router);

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(port);

console.log('Crawler RESTful API server started on: ' + port);