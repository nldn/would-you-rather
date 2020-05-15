import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import Loading from "./Loading";

import { setCurrentUser } from "../actions/users";

const Login = ({ users, loading, currentUser, dispatch }) => {
  const [selectedOption, setSelectedOption] = useState("-1");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setCurrentUser(selectedOption));

    history.push("/");
  };

  return (
    <div className="card col-6 mx-auto">
      <div className="card-body">
        <h1>Login</h1>
        {loading === true ? (
          <Loading text="loading..." />
        ) : (
          <form>
            <div className="form-group">
              <select
                className="form-control"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option key={-1} value="-1" disabled>
                  Please select
                </option>
                {Object.keys(users).map((key) => (
                  <option key={users[key].id} value={users[key].id}>
                    {users[key].name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-outline-dark btn-block"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    loading: state.users.loading,
    currentUser: state.users.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
