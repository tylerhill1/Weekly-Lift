import React, {Component} from "react";
import axios from 'axios';

export default class EditExercise extends Component {

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
    this.onChangeExerciseCompleted = this.onChangeExerciseCompleted.bind(this);
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

  componentDidMount() {
    axios.get('http://localhost:4000/exercises/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          exercise_day: response.data.exercise_day,
          exercise_name: response.data.exercise_name,
          exercise_weight: response.data.exercise_weight,
          exercise_sets: response.data.exercise_sets,
          exercise_reps: response.data.exercise_reps,
          exercise_completed: response.data.exercise_completed,
        })
      })
      .catch(function(error) {
        console.log(error)
      })
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

onChangeExerciseCompleted(e) {
  this.setState({
      exercise_completed: !this.state.exercise_completed
  });
}

onSubmit(e) {
  e.preventDefault();
  const obj = {
    exercise_day: this.state.exercise_day,
    exercise_name: this.state.exercise_name,
    exercise_weight: this.state.exercise_weight,
    exercise_sets: this.state.exercise_sets,
    exercise_reps: this.state.exercise_reps,
    exercise_completed: this.state.exercise_completed,
  };
  axios.post('http://localhost:4000/exercises/update/' + this.props.match.params.id, obj)
  .then(res => console.log(res.data));
  
  this.props.history.push('/')
}

  render() {
    return (
      <div style={{marginTop: 20}}>
        <h3>Update Exercise</h3>
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
            <div className="form-check">
                      <input type="checkbox"
                        className="form-check-input"
                        id="completedCheckbox"
                        name="completedCheckbox"
                        onChange={this.onChangeExerciseCompleted}
                        checked={this.state.exercise_completed}
                        value={this.state.exercise_completed}
                        />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>
                    </div>
                    <br/>
            <div className="form-group">
                <input type="submit" value="Update Exercise" className="btn btn-primary" />
            </div>
        </form>
      </div>
    )
  }
}