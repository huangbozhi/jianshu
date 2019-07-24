import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionsCreate } from './store'
import List from './components/List/index'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import './index.css'

class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentWillMount() {
    this.props.getList();
    console.log('componentWillMount',this.props.topicLists);
  }
  renderLists() {
    const { topicLists } = this.props;
    const newTopicLists = topicLists.toJS();
    console.log('newTopicLists', newTopicLists)
    // console.log('newTopicLists',newTopicLists)  
    if(newTopicLists.length > 0) {
      return <List topicLists={this.props.topicLists}></List>
    }
  }
  
  render() {
    return (
        <div className="home-wrapper">
          <div className="home-left">
            <img src="http://img1.imgtn.bdimg.com/it/u=2930725367,1198658348&fm=26&gp=0.jpg" alt=""/>
            <Topic></Topic>
            {
              this.renderLists()
            }
            {/* <List></List> */}
          </div>
          <div className="home-right">
            <Recommend></Recommend>
            <Writer></Writer>
          </div>
          <div className="backToTop"></div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('state',state);
  return {
    topicLists: state.get('index').get('topicLists'),
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('dispatch')
  return {
    getList(){
      dispatch(actionsCreate.getList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);