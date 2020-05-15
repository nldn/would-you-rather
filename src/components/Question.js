import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { updateQuestion } from "../actions/questions";

const Question = ({ question, show, currentUser, dispatch }) => {
  const handleSelection = (option) => {
    const q = {
      authedUser: currentUser,
      qid: question.id,
      answer: option,
    };

    dispatch(updateQuestion(q));
  };

  const isAnswered = () => {
    return (
      question.optionOne.votes.includes(currentUser) ||
      question.optionTwo.votes.includes(currentUser)
    );
  };

  return (
    <div
      className={
        (isAnswered() && show === "answered") ||
        (!isAnswered() && show === "unanswered")
          ? "card mt-3 mb-3"
          : "card mt-2 mb-3 d-none"
      }
    >
      <div className="card-body">
        <h2 className="card-title text-center">Would you Rather</h2>

        <div className="row">
          <div className="col">
            <div
              className={
                question.optionOne.votes.includes(currentUser)
                  ? "card bg-light"
                  : "card"
              }
            >
              <div className="card-body text-center">
                <span className="font-weight-bold">
                  {question.optionOne.text}
                  <small className="d-block">
                    ({question.optionOne.votes.length} votes)
                  </small>
                </span>
                {!isAnswered() && (
                  <button
                    type="button"
                    className="btn btn-dark mt-3"
                    onClick={() => handleSelection("optionOne")}
                  >
                    Select
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className={
                question.optionTwo.votes.includes(currentUser)
                  ? "card bg-light"
                  : "card"
              }
            >
              <div className="card-body text-center">
                <span className="font-weight-bold">
                  {question.optionTwo.text}
                  <small className="d-block">
                    ({question.optionTwo.votes.length} votes)
                  </small>
                </span>
                {!isAnswered() && (
                  <button
                    type="button"
                    className="btn btn-dark mt-3"
                    onClick={() => handleSelection("optionTwo")}
                  >
                    Select
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <Link
          to={{
            pathname: `questions/${question.id}`,
            state: { question },
          }}
          className="btn btn-outline-dark mt-3"
        >
          Details
        </Link>
      </div>

      <div className="card-footer text-muted">
        <div className="row">
          <div className="col">
            <small>ID: {question.id}</small>
          </div>
          <div className="col">
            <small className="text-right d-block">
              Author: {question.author}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    currentUser: state.users.currentUser,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
