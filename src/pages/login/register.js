import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionsCreate } from './store'
import { Button, Input } from 'antd'
import './index.css';

class Register extends Component {

  componentDidMount() {
    console.log('--',this.props.userInfo,'--');
  }

  check(username, password) {
    const { userInfo } = this.props;
    let newUserInfo = userInfo.toJS();
    for(let k of newUserInfo){
      if(k.username == username) {
        return false
      }else {
        return true
      }
    }
  }
 
  render() {
    const { isActive } = this.props
    return (
      <div className="Login">
        <div className="logo"></div>
        <div className="loginBox">
          <div className="btn">
            <a className={`sign-in ${isActive ? '' : 'active'}`} href="/login">登录</a>
            <b>·</b>
            <a className={`sign-out ${isActive ? 'active' : ''}`} href="/register">注册</a>
          </div>
          <div className="input">
            <Input placeholder="请输入账号" type="text" onChange={(e)=>{this.username = e.target.value}} />
            <Input placeholder="请输入密码"type="password" onChange={(e)=>{this.password = e.target.value}} />
            <Button type="primary" block onClick={() => this.props.register(this.username, this.password, this.check(this.username, this.password))}>注册</Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    isActive: state.getIn(['login', 'isActive']),
    userInfo: state.getIn(['login', 'userInfo'])
  }
}
const mapDispatch = (dispatch) => {
  return {
    register(username, password, boolearn) {
      if(boolearn) {
        dispatch(actionsCreate.addUser(username, password));
        this.history.push('/login');
      } else {
        // alert('failed) 已存在该用户
      }
    }
    // to -> 登录页面
  }
}

export default connect(mapState, mapDispatch)(Register);