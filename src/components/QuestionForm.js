import React, { useState } from "react";
import { connect } from "react-redux";

import { postQuestion } from "../actions/questions";

import Loading from "./Loading";

const QuestionForm = ({ currentUser, dispatch, loading }) => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const question = {
      author: currentUser,
      optionOneText: optionOne,
      optionTwoText: optionTwo,
    };

    dispatch(postQuestion(question));
  };

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">New Question</h1>
        <hr/>
        
        {loading === true ? (
          <Loading text="posting..." />
        ) : (
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Option One"
                value={optionOne}
                onChange={(e) => setOptionOne(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Option Two"
                value={optionTwo}
                onChange={(e) => setOptionTwo(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-outline-dark"
              onClick={handleSubmit}
            >
              Add
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.users.currentUser,
    loading: state.questions.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
