import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = props => (
  <tr>
    <td className={props.exercise.exercise_completed ? 'completed' : ''}>{props.exercise.exercise_name}</td>
    <td className={props.exercise.exercise_completed ? 'completed' : ''}>{props.exercise.exercise_weight}</td>
    <td className={props.exercise.exercise_completed ? 'completed' : ''}>{props.exercise.exercise_sets}</td>
    <td className={props.exercise.exercise_completed ? 'completed' : ''}>{props.exercise.exercise_reps}</td>
    <td>
      <Link to={"/edit/"+props.exercise._id}>Edit</Link>
    </td>
  </tr>
)

export default class WorkoutPlan extends Component {
  
  constructor(props) {
      super(props);
      this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:4000/exercises/')
      .then(response => {
        this.setState({exercises: response.data})
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  componentDidUpdate() {
    axios.get('http://localhost:4000/exercises/')
      .then(response => {
        this.setState({exercises: response.data})
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  exerciseList() {
    return this.state.exercises.map(function(currentExercise, i) {
      return <Exercise exercise={currentExercise} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Workout Plan</h3>
        <table className="table table-striped" style={{ marginTop: 20 }} >
          <thead>
            <tr>
              <th>Exercise</th>
              <th>Weight</th>
              <th>Sets</th>
              <th>Reps</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    )
  }
}