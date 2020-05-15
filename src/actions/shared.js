import { fetchUsers } from "./users";
import { fetchQuestions } from "./questions";

export const getInitialData = () => {
  return (dispatch) => {
    dispatch(fetchUsers());
    dispatch(fetchQuestions());
  };
};
