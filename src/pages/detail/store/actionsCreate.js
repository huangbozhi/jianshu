import axios from 'axios';
import { fromJS } from 'immutable'
import * as actionsTypes from './actionsTypes'; 


export const getDetail = (id) => {
  return (dispatch) => {
    axios.get(`/api/detail.json`).then(res => {
      const result = res.data[id];
      // console.log('result', result);
      const action = {
        type: actionsTypes.GET_DETAIL,
        data: fromJS(result)
      }
      dispatch(action);
    }).catch((err) => {
      console.log(err)
    })
  }
}