import { Store } from 'flux/utils'
import AppDispatcher from '../dispatcher/AppDispatcher'
import { ADD_TAG } from '../actions/TagAction'

class TagStore extends Store {
  constructor(dispatcher) {
    super(dispatcher)
    this.tags = ["reactjs","angularjs"]
  }

  __onDispatch(payload) {

    switch (payload.type) {
      case ADD_TAG:
        this.tags = [...this.tags, payload.tag]
        break;
      default:
    }

    this.__emitChange();
  }

  getState() {
    return {
      tags: this.tags
    }
  }
}


const tagStore = new TagStore(AppDispatcher)
export default tagStore
