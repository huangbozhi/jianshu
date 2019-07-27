import React, { Component } from 'react';
import { actionsCreate } from './store';
import { connect } from 'react-redux'
import './index.css'

class Detail extends Component {

  componentDidMount() {
    const { match } = this.props
    let id = match.params.id
    this.props.getDetail(id);
  }

  getData() {
    const { match } = this.props
    let id = match.params.id
    const { articles } = this.props;
    if(articles.size) {
      const newArticle = articles.toJS();
      let data 
      for (let k of newArticle) {
        if(k['title']){
          data = k
        }
      }
      return data
    } else {
      return
    }
  }

  render() {
    const data = this.getData();
    // console.log('render',this.getData())
    if(data) {
      return (
       <div>
          <div className="article">
            <h1>{data.title}</h1>
            <img src={data.imgUrl} alt=""/>
          </div>
          <div className="context" dangerouslySetInnerHTML={{__html: data.context}}></div>
       </div>
      )
    } else {
      return (
        <p>该页面已被删除</p>
      )
    }
  }
}

const mapState = (state) => {
  return {
    articles: state.getIn(['detail', 'articles']),
  }
}

const mapDispatch = (dispatch) => {
  return {
    getDetail(id) {
      dispatch(actionsCreate.getDetail(id));
    }
  }
}

export default connect(mapState ,mapDispatch)(Detail);
