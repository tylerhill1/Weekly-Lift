import React, {Component} from "react";
import axios from 'axios';

export default class CreateExercise extends Component {

    constructor(props) {
        super(props);

        this.onChangeExerciseDay = this.onChangeExerciseDay.bind(this);
        this.onChangeExerciseName =
        this.onChangeExerciseName.bind(this);
        this.onChangeExerciseWeight =
        this.onChangeExerciseWeight.bind(this);
        this.onChangeExerciseSets =
        this.onChangeExerciseSets.bind(this);
        this.onChangeExerciseReps =
        this.onChangeExerciseReps.bind(this);
        this.onSubmit =
        this.onSubmit.bind(this);

        this.state = {
            exercise_day: "",
            exercise_name: "",
            exercise_weight: "",
            exercise_sets: "",
            exercise_reps: "",
            exercise_completed: false,
        }
    }

    onChangeExerciseDay(e) {
        this.setState({
            exercise_day: e.target.value
        });
    };

    onChangeExerciseName(e) {
        this.setState({
            exercise_name: e.target.value
        });
    }

    onChangeExerciseWeight(e) {
        this.setState({
            exercise_weight: e.target.value
        });
    }

    onChangeExerciseSets(e) {
        this.setState({
            exercise_sets: e.target.value
        });
    }

    onChangeExerciseReps(e) {
        this.setState({
            exercise_reps: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log("Form submitted:");
        console.log("Exercise Day: " + this.state.exercise_day);
        console.log("Exercise Name: " + this.state.exercise_name);
        console.log("Exercise Weight: " + this.state.exercise_weight);
        console.log("Exercise Sets: " + this.state.exercise_sets);
        console.log("Exercise Reps: " + this.state.exercise_reps);
        console.log("Exercise Completed: " + this.state.exercise_completed);

        const newExercise = {
            exercise_day: this.state.exercise_day,
            exercise_name: this.state.exercise_name,   exercise_weight: this.state.exercise_weight,
            exercise_sets: this.state.exercise_sets,
            exercise_reps: this.state.exercise_reps,
            exercise_completed: this.state.exercise_completed
        }

        axios.post('http://localhost:4000/exercises/add', newExercise)
            .then(res => console.log(res.data));

        this.setState({
            exercise_day: "",
            exercise_name: "",
            exercise_weight: "",
            exercise_sets: "",
            exercise_reps: "",
            exercise_completed: false,
        })
    }

  render() {
    return (
      <div style={{marginTop: 20}}>
        <h3>Create New Exercise</h3>
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
                <label>Workout Day: </label>
                <br></br>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="exerciseDayOptions" id="upperBodyA" value="Upper Body A" checked={this.state.exercise_day==='Upper Body A'} onChange={this.onChangeExerciseDay} />
                    <label className="form-check-label">Upper Body A</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="exerciseDayOptions" id="upperBodyB" value="Upper Body B" checked={this.state.exercise_day==='Upper Body B'} onChange={this.onChangeExerciseDay} />
                    <label className="form-check-label">Upper Body B</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="exerciseDayOptions" id="lowerBodyA" value="Lower Body A" checked={this.state.exercise_day==='Lower Body A'} onChange={this.onChangeExerciseDay} />
                    <label className="form-check-label">Lower Body A</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="exerciseDayOptions" id="lowerBodyB" value="Lower Body A" checked={this.state.exercise_day==='Lower Body B'} onChange={this.onChangeExerciseDay} />
                    <label className="form-check-label">Lower Body B</label>
                    </div>
            </div>
            <div className="form-group">
                <label>Exercise Name: </label>
                <input type="text" className="form-control" value={this.state.exercise_name}
                onChange={this.onChangeExerciseName}
                />
            </div>
            <div className="form-group">
                <label>Weight: </label>
                <input type="text" className="form-control" value={this.state.exercise_weight}
                onChange={this.onChangeExerciseWeight}
                />
            </div>
            <div className="form-group">
                <label>Sets: </label>
                <input type="text" className="form-control" value={this.state.exercise_sets}
                onChange={this.onChangeExerciseSets}
                />
            </div>
            <div className="form-group">
                <label>Reps: </label>
                <input type="text" className="form-control" value={this.state.exercise_reps}
                onChange={this.onChangeExerciseReps}
                />
            </div>
            <div className="form-group">
                <input type="submit" value="Add Exercise" className="btn btn-primary" />
            </div>
        </form>
      </div>
    )
  }
}