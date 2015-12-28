import { Store } from 'flux/utils'
import AppDispatcher from '../dispatcher/AppDispatcher'
import {
  FETCH_QUESTIONS,
  FETCH_QUESTIONS_RESULT,
  FETCH_QUESTIONS_ERROR
} from '../actions/QuestionAction'

class QuestionStore extends Store {
  constructor(dispatcher) {
    super(dispatcher)
    this.questions = null
    this.currentTag = null;
  }

  __onDispatch(payload) {

    switch (payload.type) {
      case FETCH_QUESTIONS:
        // Store Fetching tag for result vailidation
        this.currentTag = payload.tag;
        this.questions = null;
        break;
      case FETCH_QUESTIONS_RESULT:
        // Check if current fetching tag and result is match
        if (this.currentTag === payload.tag) {
          this.questions = payload.questions;
        }
        break;
      default:
    }

    this.__emitChange();
  }

  getState() {
    return {
      questions: this.questions
    }
  }
}


const questionStore = new QuestionStore(AppDispatcher)
export default questionStore
