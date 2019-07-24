import * as actionsTypes from './actionsTypes';
import { fromJS } from 'immutable'  

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  lists: [],
  page: 0,
  totalPage: 0
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionsTypes.SEARCH_BLUR:
        return state.set('focused', false)
      // return {
      //   focused: false
      // }
    case actionsTypes.SEARCH_FOCUS:
      return state.set('focused', true)
      // return {
      //   focused: true
      // }
    case actionsTypes.GET_LISTS:
      return state.merge({
        lists: action.data,
        totalPage: action.totalPage
      })
      // return state.set('lists', action.data).set('totalPage', action.totalPage)
    case actionsTypes.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case actionsTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case actionsTypes.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state;
  }
}