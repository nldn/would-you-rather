import {
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../api/_DATA";

import { fetchUsers } from "./users";

export const FETCH_QUESTIONS_BEGIN = "FETCH_QUESTIONS_BEGIN";
export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS";
export const FETCH_QUESTIONS_FAILURE = "FETCH_QUESTIONS_FAILURE";
export const POST_QUESTION_BEGIN = "POST_QUESTION_BEGIN";
export const POST_QUESTION_SUCCESS = "POST_QUESTION_SUCCESS";
export const POST_QUESTION_FAILURE = "POST_QUESTION_FAILURE";
export const UPDATE_QUESTION_BEGIN = "UPDATE_QUESTION_BEGIN";
export const UPDATE_QUESTION_SUCCESS = "UPDATE_QUESTION_SUCCESS";
export const UPDATE_QUESTION_FAILURE = "UPDATE_QUESTION_FAILURE";

export const fetchQuestionsBegin = () => {
  return {
    type: FETCH_QUESTIONS_BEGIN,
  };
};

export const fetchQuestionsSuccess = (questions) => {
  return {
    type: FETCH_QUESTIONS_SUCCESS,
    payload: {
      questions,
    },
  };
};

export const fetchQuestionsFailure = (error) => {
  return {
    type: FETCH_QUESTIONS_FAILURE,
    payload: {
      error,
    },
  };
};

export const fetchQuestions = () => {
  return (dispatch) => {
    dispatch(fetchQuestionsBegin());

    _getQuestions()
      .then((questions) => {
        dispatch(fetchQuestionsSuccess(questions));
      })
      .catch((error) => {
        dispatch(fetchQuestionsFailure(error));
      });
  };
};

export const postQuestionBegin = () => {
  return {
    type: POST_QUESTION_BEGIN,
  };
};

export const postQuestionSuccess = (question) => {
  return {
    type: POST_QUESTION_SUCCESS,
    payload: {
      question,
    },
  };
};

export const postQuestionFailure = (error) => {
  return {
    type: POST_QUESTION_FAILURE,
    payload: {
      error,
    },
  };
};

export const postQuestion = (question) => {
  return (dispatch) => {
    dispatch(postQuestionBegin());

    _saveQuestion(question)
      .then((question) => {
        dispatch(postQuestionSuccess(question));
        dispatch(fetchQuestions());
        dispatch(fetchUsers());
      })
      .catch((error) => {
        dispatch(postQuestionFailure(error));
      });
  };
};

export const updateQuestionBegin = () => {
  return {
    type: UPDATE_QUESTION_BEGIN,
  };
};

export const updateQuestionSuccess = (question) => {
  return {
    type: UPDATE_QUESTION_SUCCESS,
    payload: {
      question,
    },
  };
};

export const updateQuestionFailure = (error) => {
  return {
    type: UPDATE_QUESTION_FAILURE,
    payload: {
      error,
    },
  };
};

export const updateQuestion = (question) => {
  return (dispatch) => {
    dispatch(updateQuestionBegin());

    _saveQuestionAnswer(question)
      .then(() => {
        dispatch(updateQuestionSuccess(question));
        dispatch(fetchUsers());
        dispatch(fetchQuestions());
      })
      .catch((error) => {
        dispatch(updateQuestionFailure(error));
      });
  };
};
