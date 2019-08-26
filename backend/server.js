const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const exerciseRoutes = express.Router();
const PORT = 4000;

let Exercise = require("./exercise.model");


app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/exercises', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
})

exerciseRoutes.route("/").get(function(req, res) {
    Exercise.find(function(err, exercises) {
        if (err) {
            console.log(err);
        } else {
            res.json(exercises);
        }
    })
})

exerciseRoutes.route("/:id").get(function(req, res) {
    let id = req.params.id;
    Exercise.findById(id, function(err, exercise) {
        res.json(exercise);
    });
});

exerciseRoutes.route("/add").post(function(req, res) {
    let exercise = new Exercise(req.body);
    exercise.save()
    .then(exercise => {
        res.status(200).json({'exercise': 'exercise added successfully'});
    })
    .catch(err => {
        res.status(400).send('adding new exercise failed');
    });
});

exerciseRoutes.route('/update/:id').post(function(req, res) {
    Exercise.findById(req.params.id, function(err, exercise) {
        if (!exercise) {
            res.status(404).send('data is not found');
        }
        else {
            exercise.exercise_day = req.body.exercise_day;
            exercise.exercise_name = req.body.exercise_name;
            exercise.exercise_weight = req.body.exercise_weight;
            exercise.exercise_sets = req.body.exercise_sets;
            exercise.exercise_reps = req.body.exercise_reps;
            exercise.exercise_completed = req.body.exercise_completed;

            exercise.save().then(exercise => {
                res.json('Exercise updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
        };


    });
});

app.use('/exercises', exerciseRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});