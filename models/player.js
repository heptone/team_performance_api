const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create game schema
const PlayerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    position: {
        type: String
    },
    shirtNumber: {
        type: Number
    },
    goalInLife: {
        type: String
    },
    yearsPerforming: {
        type: String
    },
    imgRel: {
        type: String
    },
    games: {
        type: Number,
        default: 0
    },
    goals: {
        type: Number,
        default: 0
    },
    assists: {
        type: Number,
        default: 0
    },
    tabbar: {
        type: Number,
        default: 0
    },
    utvisningar: {
        type: Number,
        default: 0
    },
    dribblingar: {
        type: Number,
        default: 0
    },
    playoffGoals: {
        type: Number,
        default: 0
    },
    playoffAssists: {
        type: Number,
        default: 0
    },
    playoffTabbar: {
        type: Number,
        default: 0
    },
    playoffUtvisningar: {
        type: Number,
        default: 0
    },
    playoffDribblingar: {
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
const Player = mongoose.model('player', PlayerSchema);
module.exports = Player;