import * as actionsTypes from './actionsTypes';
import { fromJS } from 'immutable'

export const addUser = (username, password) => ({
  type: actionsTypes.ADD_USER,
  userInfo: fromJS({
    username,
    password
  })
})

export const check = (username ,password) => ({
  type: actionsTypes.LOGIN,
  username,
  password
})

export const success = () => ({
  type: actionsTypes.SUCCESS
})

export const exit = () => ({
  type: actionsTypes.EXIT
})