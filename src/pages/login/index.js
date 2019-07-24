import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button, Input } from 'antd';
import { actionsCreate } from './store'
import './index.css';

class Login extends Component {

  componentDidMount() {
    console.log('--',this.props.isActive,'--');
  }
 
  check(username, password) {
    const { userInfo } = this.props;
    let newUserInfo = userInfo.toJS();
    console.log('check',newUserInfo);
    for(let k of newUserInfo){
      console.log(k)
      if(k.username == username && k.password == password) {
        return true
      }else {
        return 'false'
      }
    }
    return false
  }
  render() {
    const { isActive } = this.props
    if(!this.props.isLogin){
      return (
        <div className="Login">
          <div className="logo"></div>
          <div className="loginBox">
            <div className="btn">
              <a className={`sign-in ${isActive ? 'active' : ''}`} href="/login">登录</a>
              <b>·</b>
              <a className={`sign-out ${isActive ? '' : 'active'}`} href="/register">注册</a>
            </div>
            <div className="input">
              <Input placeholder="请输入账号" type="text" onChange={(e)=>{this.username = e.target.value}} />
              <Input placeholder="请输入密码"type="password" onChange={(e)=>{this.password = e.target.value}} />
              <Button type="primary" block onClick={() => this.props.login(this.username, this.password, this.check(this.username,this.password))}>登录</Button>
            </div>
          </div>
        </div>
      )
    }else {
      return <Redirect to='/'/>
    }
  }
}

const mapState = (state) => {
  return {
    isActive: state.getIn(['login', 'isActive']),
    isLogin: state.getIn(['header', 'isLogin']),
    userInfo: state.getIn(['login', 'userInfo'])
  }
}
const mapDispatch = (dispatch) => {
  return {
    login(username, password, boolean) {
      console.log(boolean)
      if(boolean){
        dispatch(actionsCreate.success(username, password));
        // alert('success');
        this.history.push('/')
      } else {
        // alert('failed');
        this.history.push('/register')
      }
    }
  }
}

export default connect(mapState, mapDispatch)(Login);