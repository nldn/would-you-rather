import {
  FETCH_QUESTIONS_BEGIN,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  POST_QUESTION_BEGIN,
  POST_QUESTION_SUCCESS,
  POST_QUESTION_FAILURE,
  UPDATE_QUESTION_BEGIN,
  UPDATE_QUESTION_SUCCESS,
  UPDATE_QUESTION_FAILURE,
} from "../actions/questions";

const initialState = {
  questions: {},
  loading: false,
  error: undefined,
};

const questions = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_BEGIN:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
        questions: action.payload.questions,
      };
    case FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        questions: {},
        error: action.payload.error,
      };
    case POST_QUESTION_BEGIN:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case POST_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
        // questions: {
        //   ...state.questions,
        //   ...{ [action.payload.question.id]: action.payload.question },
        // },
      };
    case POST_QUESTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case UPDATE_QUESTION_BEGIN:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case UPDATE_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
        // questions: {
        //   ...state.questions,
        //   [action.payload.question.qid]: {
        //     ...state.questions[action.payload.question.qid],
        //     [action.payload.question.answer]: {
        //       ...state.questions[action.payload.question.qid][
        //         action.payload.question.answer
        //       ],
        //       votes: state.questions[action.payload.question.qid][
        //         action.payload.question.answer
        //       ].votes.concat([action.payload.question.authedUser]),
        //     },
        //   },
        // },
      };
    case UPDATE_QUESTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default questions;
