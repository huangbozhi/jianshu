import React, { Component } from 'react';
import './style.css'

class List extends Component {
  // constructor(props){
  //   super(props);
  // }
 
  componentDidMount() {
    console.log('componentDidMount',this.props,this.state)
  }

  render() {
    const { topicLists }  = this.props
    const newTopicLists = topicLists.toJS();
    console.log('newTopicLists',newTopicLists)
    return (
      <div>
        {
          newTopicLists.map((item) => {
            return (
              <div className="list" key={item.id}>
                <div className="left">
                  <a alt="" href="#" className="title">
                    {item.title}
                  </a>
                  <div className="desc">
                    {item.desc}
                  </div>
                </div>
                <div className="right">
                  <img src={item.img} alt=""/>
                </div>
              </div> 
            )
          })
        }
        <div className="learnMore" onClick={this.props.getMoreLists}>加载更多</div>
      </div>
    )
  }
}

export default List;