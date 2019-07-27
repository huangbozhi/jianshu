import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as indexReducer } from '../pages/home/store';
import { reducer as loginReducer } from '../pages/login/store';
import { reducer as detailReducer } from '../pages/detail/store'
 

export default combineReducers({
  header: headerReducer, // 头部数据
  index: indexReducer,   // 首页数据
  login: loginReducer,   // 登录数据
  detail: detailReducer, // 详情数据
})