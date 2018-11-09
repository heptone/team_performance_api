const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create game schema
const TeamSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    group: {
        type: String,
        default: "none"
    },
    groupGames: {
        type: Number,
        default: 0
    },
    groupWins: {
        type: Number,
        default: 0
    },
    groupDraws: {
        type: Number,
        default: 0
    },
    groupLosses: {
        type: Number,
        default: 0
    },
    groupGoalsMade: {
        type: Number,
        default: 0
    },
    groupGoalsAgainst: {
        type: Number,
        default: 0
    },
    groupPoints: {
        type: Number,
        default: 0
    },
    playoffGames: {
        type: Number,
        default: 0
    },
    playoffWins: {
        type: Number,
        default: 0
    },
    playoffDraws: {
        type: Number,
        default: 0
    },
    playoffLosses: {
        type: Number,
        default: 0
    },
    playoffGoalsMade: {
        type: Number,
        default: 0
    },
    playoffGoalsAgainst: {
        type: Number,
        default: 0
    },
    playoffPoints: {
        type: Number,
        default: 0
    },
    createdTime: {
        type: Date,
        default: Date.now
    }, 
    updatedTime: {
        type: Date,
        default: Date.now
    }
});
const Team = mongoose.model('team', TeamSchema);
module.exports = Team;