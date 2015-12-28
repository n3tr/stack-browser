
import { questionsByTag } from "../utils/stackApi"
import AppDispatcher from "../dispatcher/AppDispatcher"


export const FETCH_QUESTIONS = "FETCH_QUESTIONS"
export const FETCH_QUESTIONS_ERROR = "FETCH_QUESTIONS_ERROR"
export const FETCH_QUESTIONS_RESULT = "FETCH_QUESTIONS_RESULT"

export const ADD_FAVORITE = "ADD_FAVORITE"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"

export const fetchQuestionsByTag = (tagName) => {
  AppDispatcher.dispatch({
    type: FETCH_QUESTIONS,
    tag: tagName
  });

  questionsByTag( tagName , (err, items) => {
    if (err) {
      AppDispatcher.dispatch({
        type: FETCH_QUESTIONS_ERROR,
        error: err,
        tag: tagName
      });
      return;
    }

    AppDispatcher.dispatch({
      type: FETCH_QUESTIONS_RESULT,
      questions: items,
      tag: tagName
    });
  });
}

export const addFavorite = (question) => {
  AppDispatcher.dispatch({
    type: ADD_FAVORITE,
    question: question
  })
}

export const removeFavorite = (question) => {
  AppDispatcher.dispatch({
    type: REMOVE_FAVORITE,
    question: question
  })
}
