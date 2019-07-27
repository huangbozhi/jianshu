import * as actionsTypes from './actionsTypes';
import { fromJS } from 'immutable' 

const defaultState = fromJS({
  articles: []
})


export default (state = defaultState, action) => {
  switch(action.type) {
    case actionsTypes.GET_DETAIL: 
    let oldArr = state.get('articles');
      return state.merge({
        articles: state.get('articles').push(action.data)
      });
    default: 
      return state;
  }
}