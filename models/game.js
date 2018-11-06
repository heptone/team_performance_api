const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create game schema
const GameSchema = new Schema({
    homeTeamName: {
        type: String
    },
    homeTeamId: {
        type: Schema.Types.ObjectId
    },
    awayTeamName: {
        type: String
    },
    awayTeamId: {
        type: Schema.Types.ObjectId
    },
    result: {
        type: String // 1X2
    },
    homeGoals: {
        type: Number,
        default: 0
    },
    awayGoals: {
        type: Number,
        default: 0
    },
    groupGame: {
        type: Boolean
    },
    nameOfGroup: {
        type: String
    },
    kickoffTime: {
        type: String 
    },
    referat: {
        type: String
    },
    createdTime: {
        type: Date,
        //default: Date.now
    }, 
    updatedTime: {
        type: Date,
        //default: Date.now
    }
});

const Game = mongoose.model('game', GameSchema);
module.exports = Game;