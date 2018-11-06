const express = require('express');
const router = express.Router();
const Game = require('../models/game');

router.get('/games', function (req, res, next) {
    Game.find({}).then(function(game){
        console.log(game);
        res.json(game);
    })
});

// post a list of games from db
router.post('/games', function (req, res, next) {
    Game.create(req.body).then(function (game) {
        console.log(game);
        res.json(game); // send a game
    }).catch(next);
    // catch error.
});

// put a list of games from db
router.put('/games/:id', function (req, res, next) {
    console.log('Game tries to update: ', req.params.id);
    Game.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Game.findOne({ _id: req.params.id }).then(function (game) {
            res.json(game);
        }).catch(next);
    });
});

// delete a list of games from db
router.delete('/games/:id', function (req, res, next) {
    //console.log('Tries to remove: ', req.params.id);
    Game.findByIdAndDelete({ _id: req.params.id }).then(function (game) {
        console.log('Removed: ', req.params.id);
        res.json(game);
    }).catch(next);
});

module.exports = router;