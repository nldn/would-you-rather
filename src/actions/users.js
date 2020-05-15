import { _getUsers } from "../api/_DATA";

export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const FETCH_USERS_BEGIN = "FETCH_USERS_BEGIN";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const setCurrentUser = (id) => {
  return {
    type: SET_CURRENT_USER,
    payload: {
      id,
    },
  };
};

export const fetchUsersBegin = () => {
  return {
    type: FETCH_USERS_BEGIN,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: {
      users,
    },
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: {
      error,
    },
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersBegin());

    _getUsers()
      .then((users) => {
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error));
      });
  };
};
