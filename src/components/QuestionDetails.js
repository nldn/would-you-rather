import React from "react";
import { connect } from 'react-redux';

const QuestionDetails = (props) => {
  const { question } = props.location.state;
  const { currentUser } = props;

  const printStatistic = (option, total) => {
    const numOfVotes = option.votes.length;

    const percentageOfVotes = (numOfVotes / total) * 100;

    const statistic = `${numOfVotes} of ${total} votes (${percentageOfVotes.toFixed(2)} %)`;

    return statistic;
  };

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Question Details</h1>
        <hr/>

        <div className="row">
          <div className="col">
            <p className="card-text text-center text-muted">
              ID: {question.id}
            </p>
          </div>
          <div className="col">
            <p className="card-text text-center text-muted">
              Author: {question.author}
            </p>
          </div>
        </div>

        <hr/>

        <div className="row">
          <div className="col">
            <h2 className="text-center mt-3 mb-3">Would you Rather?</h2>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className={
              question.optionOne.votes.includes(currentUser)
                ? "card bg-light"
                : "card"
            }>
              <div className="card-body">
                <h3 className="text-center">
                  {question.optionOne.text}
                </h3>

                <p className="card-text text-center">
                  {printStatistic(question.optionOne, question.optionOne.votes.length + question.optionTwo.votes.length)}
                </p>
                
                Voted by:
                <ul>
                  {question.optionOne.votes.map((vote) => (
                    <li key={vote}>{vote}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">
                  {question.optionTwo.text}
                </h3>

                <p className="card-text text-center">
                  {printStatistic(question.optionTwo, question.optionOne.votes.length + question.optionTwo.votes.length)}
                </p>

                Voted by:
                <ul>
                  {question.optionTwo.votes.map((vote) => (
                    <li key={vote}>{vote}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.users.currentUser
  };
};

export default connect(mapStateToProps)(QuestionDetails);
