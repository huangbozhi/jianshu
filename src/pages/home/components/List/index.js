import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

class List extends Component {
  // constructor(props){
  //   super(props);
  // }

  render() {
    const { topicLists }  = this.props;
    const newTopicLists = topicLists.toJS();
    return (
      <div>
        {
          newTopicLists.map((item) => {
            return (
              <div className="list" key={item.id}>
                <div className="left">
                  <Link to={`/detail/${item.id}`} className="title">
                    {item.title}
                  </Link>
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