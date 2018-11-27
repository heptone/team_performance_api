const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// set up express app
const app = express();


// connect to mongodb
//mongoose.connect('mongodb://localhost/teamperformance');
mongoose.connect('mongodb://192.168.0.55/teamperformance');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(cors());

// initialize routes
app.use('/api', require('./routes/game'));
app.use('/api', require('./routes/team'));
app.use('/api', require('./routes/player'));

// error handling middleware
app.use(function(err, req, res, next){
    //console.log(err);
    res.status(422).send({error: err.message});
});

// listen for requests.
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests', process.env.port);
});
