import { Store } from 'flux/utils'

import AppDispatcher from '../dispatcher/AppDispatcher'
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/QuestionAction'

class FavoriteStore extends Store {
  constructor(dispatcher) {
    super(dispatcher)
    this.favorites = []
  }

  __onDispatch(payload) {

    switch (payload.type) {
      case ADD_FAVORITE:
        // Check if question_id already existed
        let exist = this.favorites.some((f)=> {
          return f.question_id === payload.question.question_id
        })
        if(!exist){
          this.favorites = [...this.favorites, payload.question]
        }
        break;
      case REMOVE_FAVORITE:
        this.favorites = this.favorites.filter((f)=>{
          return f.question_id !== payload.question.question_id
        });
        break;
      default:
    }

    this.__emitChange();
  }

  getState() {
    return {
      favorites: this.favorites
    }
  }
}


const favoriteStore = new FavoriteStore(AppDispatcher)
export default favoriteStore
