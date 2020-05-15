import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Leaderboard from "./components/Leaderboard";
import QuestionForm from "./components/QuestionForm";
import QuestionDetails from "./components/QuestionDetails";

import { getInitialData } from "./actions/shared";

const App = ({ dispatch }) => {
  useEffect(() => {
    dispatch(getInitialData());
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 mt-3 mb-3">
          <Sidebar />
        </div>
        <div className="col-9 mt-3 mb-3">
          <Switch>
            <ProtectedRoute path="/" exact component={Dashboard} />
            <ProtectedRoute path="/leaderboard" component={Leaderboard} />
            <ProtectedRoute path="/add" component={QuestionForm} />
            <ProtectedRoute path="/questions/:id" component={QuestionDetails} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  };
};

export default connect(null, mapDispatchToProps)(App);
