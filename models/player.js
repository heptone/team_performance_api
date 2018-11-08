const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create game schema
const PlayerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        defualt: "striker"
    },
    position: {
        type: String,
        defualt: "striker"
    },
    shirtNumber: {
        type: Number,
        default: 11
    },
    goalInLife: {
        type: String,
        defualt: "Okand"
    },
    yearsPerforming: {
        type: String,
        default: "oklart"
    },
    imgRel: {
        type: String,
        default: "HeptoneTest.jpg"
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