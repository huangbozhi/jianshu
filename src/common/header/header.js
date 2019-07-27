import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { actionsCreate } from './store';
import { message } from 'antd'
import { actionsCreate as createAction } from '../../pages/login/store/'
import './header.css'

class Header extends Component {

  // constructor(props) {
  //   super(props);
  //   this.handleInputFocus = this.handleInputFocus.bind(this);
  //   this.handleInputBlur = this.handleInputBlur.bind(this);
  // }

  showSearch() {
    const newLists = this.props.lists.toJS();  // 将immutable转成js
    const pageLists = []
    
    if(newLists.length) {
      for(let i = this.props.page * 10; i < (this.props.page  + 1) * 10; i++) {
        pageLists.push(<a href="" key={newLists[i]}>{newLists[i]}</a>)
      }
    }
    
    if(this.props.focused || this.props.mouseIn) {
      return (
        <div className="searchInfo" 
          onMouseEnter={this.props.handleMouseEnter}
          onMouseLeave={this.props.handleMouseLeave}>
          <div className="searchInfoTitle">
            热门搜索
            <span 
              className="switch" 
              onClick={() => this.props.handleChangePage(this.props.page, this.props.totalPage, this.spinIcon)}>
              <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe63f;</i>
              换一批
            </span>
          </div>
          <ul>
            {/* {
              this.props.lists.map((item) => {
                return <a key={item}>{item}</a>
              })
            } */}
            {pageLists}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }

  login() {
    const { history } = this.props
    history.push('/login')
  }

  register() {
    const { history } = this.props
    history.push('/register')
  }


  render() {
    return (
      <div className="header">
        <Link to='/'>
				  <div className="header-left pointer"></div>
				</Link>
        <div className="header-center">
          <div className="flex left active pointer">首页</div>
          <div className="flex left pointer">下载App</div>
          {
            this.props.isLogin ? 
            <div className="flex right pointer" onClick={this.props.exit}>退出</div> :
            <div className="flex right pointer" href="/login" onClick={this.login.bind(this)}>登录</div>
          }
          <div className="flex right">
            <i className="iconfont">&#xe607;</i>
          </div>
          <div className="search">
            <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames="slide"
            >
              <input type="text" placeholder="搜索" 
                className={`left input ${this.props.focused ? 'focused' : ''}`}
                onFocus={() => this.props.handleInputFocus(this.props.lists)}
                onBlur={this.props.handleInputBlur} />
            </CSSTransition>
            <i className={`iconfont left searchImg pointer ${this.props.focused ? 'active' : '' }`}>&#xe606;</i>
            {
              this.showSearch(this.props.focused)
            }
          </div>
        </div>
        <div className="header-right ">
          <div className="button register pointer" onClick={this.register.bind(this)}>注册</div>
          <div className="button write pointer">
            <i className="iconfont">&#xe694;</i>
            写文章
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),  // fromJS  immutable语法
    // focused: state.header.focused
    lists: state.get('header').get('lists'),
    page: state.get('header').get('page'),
    totalPage: state.get('header').get('totalPage'),
    mouseIn: state.get('header').get('mouseIn'),
    isLogin: state.get('login').get('isLogin')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // login() {
    //   console.log(this.history);
    //   // this.history.push('/login');
    // },
    exit() {
      dispatch(createAction.exit())
      message.warning('退出成功')
    },
    handleInputFocus(lists) {
      (lists.size === 0) && dispatch(actionsCreate.getList());
      const action = actionsCreate.searchFocus();
      dispatch(action);
    },
    handleInputBlur() {
      const action = actionsCreate.searchBlur()
      dispatch(action)
    },
    handleMouseEnter() {
      const action = actionsCreate.MouseEnter()
      dispatch(action)
    },
    handleMouseLeave() {
      const action = actionsCreate.MouseLeave()
      dispatch(action)
    },
    handleChangePage(page, totalPage,spin) {
      let angle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (angle) {
				angle = parseInt(angle, 10);
			}else {
				angle = 0;
			}
			spin.style.transform = 'rotate(' + (angle + 360) + 'deg)';
      if(page < totalPage) {
        dispatch(actionsCreate.ChangePage(page + 1))
      } else {
        dispatch(actionsCreate.ChangePage(0))
      }
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
