const express = require('express');
const router = express.Router();
const Player = require('../models/player');

// get a list of players from db
router.get('/players', function (req, res, next) {
    //console.log('getting players');
    Player.find({}).then(function (player) {
        console.log(player);
        res.json(player);
    })
});

// post a list of players from db
router.post('/players', function (req, res, next) {
    Player.create(req.body).then(function (player) {
        res.send(player); // send a player
    }).catch(next);
    // catch error.
});

// put a list of players from db
router.put('/players/:id', function (req, res, next) {
    console.log('Tries to update: ', req.params.id);
    Player.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Player.findOne({ _id: req.params.id }).then(function (player) {
            res.send(player);
        }).catch(next);
    });
});

// delete a list of players from db
router.delete('/players/:id', function (req, res, next) {
    console.log('Tries to remove: ', req.params.id);
    Player.findByIdAndDelete({ _id: req.params.id }).then(function (player) {
        console.log('Removed: ', req.params.id);
        res.send(player);
    }).catch(next);
});

module.exports = router;