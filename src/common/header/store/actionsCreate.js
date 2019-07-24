import * as actionsTypes from './actionsTypes';
import { fromJS } from 'immutable'
import axios from 'axios';

export const searchFocus = () => ({
  type: actionsTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionsTypes.SEARCH_BLUR
})

export const MouseEnter = () => ({
  type: actionsTypes.MOUSE_ENTER
})

export const MouseLeave = () => ({
  type: actionsTypes.MOUSE_LEAVE
})

export const ChangePage = (page) => ({
  type: actionsTypes.CHANGE_PAGE,
  page
})



export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerLists.json').then(res => {
      const data = res.data.data;
      const action = {
        type: actionsTypes.GET_LISTS,
        data: fromJS(data),
        totalPage: Math.floor(data.length / 10)
      }
      dispatch(action);
    })
    .catch(err => {
      console.log('error', err)
    })
  }
}