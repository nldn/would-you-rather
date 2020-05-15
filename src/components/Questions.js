import React, { useState } from "react";
import { connect } from "react-redux";

import Loading from "./Loading";
import Question from "./Question";

const Questions = ({ loading, questions }) => {
  const [showQuestions, setShowQuestions] = useState("unanswered");

  return (
    <div>
      {loading === true ? (
        <Loading text="loading..." />
      ) : (
        <>
          <select
            className="form-control"
            value={showQuestions}
            onChange={(e) => setShowQuestions(e.target.value)}
          >
            <option value="unanswered">Unanswered</option>
            <option value="answered">Answered</option>
          </select>
          {Object.keys(questions).map((key) => (
            <Question
              key={questions[key].id}
              question={questions[key]}
              show={showQuestions}
            />
          ))}
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.questions.loading,
    questions: state.questions.questions,
  };
};

export default connect(mapStateToProps)(Questions);
