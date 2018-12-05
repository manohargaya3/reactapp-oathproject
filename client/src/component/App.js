import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import { connect } from "react-redux";
import * as actions from "./../actions";

const Dashboard = () => <h3>Dashboard</h3>;
const Survey = () => <h1>Survey</h1>;
const SurveyNew = () => <h1>SurveyNew</h1>;

class App extends Component {
  componentDidMount() {
    this.props.fetch_user();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Dashboard} />
            <Route path="/Survey/new" exact component={SurveyNew} />
            <Route path="/survey" exact component={Survey} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
