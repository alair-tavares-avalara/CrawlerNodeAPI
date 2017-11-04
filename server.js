var express = require('express'),
    cors = require('cors'),
    app = express(),
    port = process.env.PORT || 5000,
    mongoose = require('mongoose'),
    Deputy = require('./api/models/deputyModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
// default to a 'localhost' configuration:
var connection_string = 'localhost/crawlernodeapi';
// if OPENSHIFT env variables are present, use the available connection info:
if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
  connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
  process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
  process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
  process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
  process.env.OPENSHIFT_APP_NAME;
}

let mongo_connection_string = 'mongodb://'+connection_string;
mongoose.connect(mongo_connection_string, {
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