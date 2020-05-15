import {
  SET_CURRENT_USER,
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "../actions/users";

const initialState = {
  currentUser: null,
  loading: false,
  users: {},
  error: undefined,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload.id,
      };
    case FETCH_USERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        loading: false,
        error: undefined,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        users: {},
      };
    default:
      return state;
  }
};

export default users;
