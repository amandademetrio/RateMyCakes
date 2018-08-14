var express = require('express');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var path = require('path');

app.use(express.static(__dirname + '/public/dist/public'));

var db_url = 'mongodb://localhost:27017/RateMyCakes'

require('./server/config/mongoose.js')(db_url);

require('./server/config/routes.js')(app)

app.listen(8000, function() {
    console.log("listening on port 8000");
})