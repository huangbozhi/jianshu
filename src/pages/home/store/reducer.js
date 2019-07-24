import * as actionsTypes from './actionsTypes';
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicLists: [],
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionsTypes.GET_LISTS:
      return state.merge ({
        topicLists: action.data
      })
    default:
      return state;
  }
}