import AppDispatcher from '../dispatcher/AppDispatcher'

export const ADD_TAG = "ADD_TAG"

export function addTag(tag) {
  AppDispatcher.dispatch({
    type: ADD_TAG,
    tag: tag.toLowerCase()
  })
}
