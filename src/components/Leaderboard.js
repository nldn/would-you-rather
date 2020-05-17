import React, { useState } from "react";
import { connect } from "react-redux";

const Leaderboard = ({ users }) => {
  const [sortBy, setSortBy] = useState('total');

  let usersArray = Object.keys(users).map((key) => {
    const id = users[key].id;
    console.log(users[key]);

    const questionsAsked = users[key].questions.length;
    const questionsAnswered = Object.keys(users[key].answers).length;

    const total = questionsAsked + questionsAnswered;

    const avatar = users[key].avatarURL;

    return {
      id,
      questionsAsked,
      questionsAnswered,
      total,
      avatar
    };
  });

  const sortUsers = (users, sortBy) => {
    let sortedUsers;

    switch (sortBy) {
      case 'total':
        sortedUsers = users.sort((a, b) => b['total'] - a['total']);
        break;
      case 'asked':
        sortedUsers = users.sort((a, b) => b['questionsAsked'] - a['questionsAsked']);
        break;
      case 'answered':
        sortedUsers = users.sort((a, b) => b['questionsAnswered'] - a['questionsAnswered']);
        break;
      default:
        sortedUsers = users.sort((a, b) => b['total'] - a['total']);
    };

    return sortedUsers;
  };

  usersArray = sortUsers(usersArray, sortBy);
  console.log(usersArray);

  return (
    <div>
      <h1>Leaderboard</h1>
      
      <select className="form-control" value={sortBy} onChange={(e) => {setSortBy(e.target.value)}}>
        <option value="total">Total</option>
        <option value="asked">Asked</option>
        <option value="answered">Answered</option>
      </select>

      {Object.keys(usersArray).map((key) => (
        <div key={usersArray[key].id} className="card mt-3 mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-3">
                <img src={usersArray[key].avatar} alt="" style={{ width: "100%" }}/>
              </div>
              <div className="col-9">
                <h3 className="card-title text-center">
                  {usersArray[key].id}
                </h3>
                <div className="row">
                  <div className="col text-center">
                    <span>Asked: {usersArray[key].questionsAsked}</span>
                  </div>
                  <div className="col text-center">
                    <span>Answered: {usersArray[key].questionsAnswered}</span>
                  </div>
                  <div className="col text-center">
                    <span>Total: {usersArray[key].total}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    users: state.users.users,
  };
};

export default connect(mapStatetoProps)(Leaderboard);
