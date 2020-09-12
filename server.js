const express  = require('express');
const app = express();
const morgan = require('morgan');             // middleware to log http requests
const port = process.env.PORT || 5555;
const bodyParser = require('body-parser');

app.use(morgan('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// diff. front end and backend routes
app.use('/api/listing/', require('./app/routes/listing.router'));

app.use(express.static(__dirname + '/public'));

// index page
app.get('*', function (req,res) {
    res.sendFile(__dirname + '/public/app/views/index.html');
});

// server listening on port
app.listen(port, function () {
    console.log('Server running on port ' + port);
});
