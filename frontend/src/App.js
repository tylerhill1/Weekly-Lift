import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/index.css";
import CreateExercise from "./components/create-exercise.component";
import EditExercise from "./components/edit-exercise.component";
import WorkoutPlan from "./components/workout-plan.component";

// import logo from "./logo.png";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
            <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
          </a> */}
            <Link to="/" className="navbar-brand">Weekly Lift</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Workout Plan</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create New Exercise</Link>
                </li>
              </ul>
            </div>
         </nav>
         <Route path="/" exact component={WorkoutPlan} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        </div>
      </Router>
    );
  }
}

export default App;
