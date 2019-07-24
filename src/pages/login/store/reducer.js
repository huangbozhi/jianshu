import * as actionsTypes from './actionsTypes';
import { fromJS } from 'immutable'

const defaultState = fromJS({
  isLogin: false,
  isActive: true,
  userInfo: [
    {
      username: 'hbz',
      password: '123'
    }
  ],
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionsTypes.ADD_USER:
      return state.merge ({
        userInfo: state.get('userInfo').push(action.userInfo)
      })
    case actionsTypes.SUCCESS:
      return state.set('isLogin', true);
    case actionsTypes.FAILED:
      return state.set('isLogin', false);
    case actionsTypes.EXIT:
        return state.set('isLogin', false)
    default:
      return state;
  }
}