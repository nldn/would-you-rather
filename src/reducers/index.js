import { combineReducers } from "redux";

import users from "./users.js";
import questions from "./questions.js";

export default combineReducers({ users, questions });
