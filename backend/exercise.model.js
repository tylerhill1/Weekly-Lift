const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Exercise = new Schema({
    exercise_day: {
        type: String
    },
    exercise_name: {
        type: String
    },
    exercise_weight: {
        type: String
    },
    exercise_sets: {
        type: String
    },
    exercise_reps: {
        type: String
    },
    exercise_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Exercise', Exercise);