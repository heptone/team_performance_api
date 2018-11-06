const express = require('express');
const router = express.Router();
const Team = require('../models/team');

// get a list of teams from db
router.get('/teams', function (req, res, next) {
    Team.find({}).then(function(team){
        console.log(team);
        res.json(team);
    })
});

// post a list of teams from db
router.post('/teams', function (req, res, next) {
    Team.create(req.body).then(function (team) {
        res.send(team); // send a team
    }).catch(next);
    // catch error.
});

// put a list of teams from db
router.put('/teams/:id', function (req, res, next) {
    console.log('Tries to update: ', req.params.id);
    Team.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Team.findOne({ _id: req.params.id }).then(function (team) {
            res.send(team);
        }).catch(next);
    });
});

// delete a list of teams from db
router.delete('/teams/:id', function (req, res, next) {
    console.log('Tries to remove: ', req.params.id);
    Team.findByIdAndDelete({ _id: req.params.id }).then(function (team) {
        console.log('Removed: ', req.params.id);
        res.send(team);
    }).catch(next);
});

module.exports = router;