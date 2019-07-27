import axios from 'axios';
import { fromJS } from 'immutable'
import * as actionsTypes from './actionsTypes';

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/indexLists.json').then(res => {
      let data = res.data;
      const action = {
        type: actionsTypes.GET_LISTS,
        data: fromJS(data)
      }
      dispatch(action);
    })
    .catch(err => {
      console.log('err',err);
    })
  } 
}