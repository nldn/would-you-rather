import React from "react";
import { connect } from "react-redux";
import Questions from "./Questions";

const Dashboard = ({ currentUser }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <strong>Welcome, {currentUser}</strong>
      <br />
      <br />

      <Questions />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.users.currentUser,
  };
};

export default connect(mapStateToProps)(Dashboard);
