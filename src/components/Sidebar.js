import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { setCurrentUser } from "../actions/users";

const Sidebar = ({ currentUser, dispatch }) => {
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(setCurrentUser(null));
  };

  return (
    <div className="card">
      <div className="card-body">
        <span className="d-block text-center">
          {currentUser ? currentUser : 'WYR?'}
        </span>

        <hr/>
        
        <nav className="nav flex-column">
          <Link to="/" className="nav-link">
            Dashboard
          </Link>
          <Link to="/leaderboard" className="nav-link">
            Leaderboard
          </Link>
          <Link to="/add" className="nav-link">
            New Question
          </Link>

          {currentUser ? (
            <a
              href="/logout"
              className="nav-link"
              onClick={(e) => handleLogout(e)}
            >
              Logout
            </a>
          ) : null}
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.users.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
