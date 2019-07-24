import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './common/header/header';
import Home from './pages/home'
import Detail from './pages/detail'
import store from './store/index'
import Login from './pages/login'
import Register from './pages/login/register'

import 'antd/dist/antd.css';

class App extends React.Component {
  
  render () {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Router>
            <div>
              <Route path="/" exact component={Home}></Route>
              <Route path="/home" exact component={Home}></Route>
              <Route path="/detail" exact component={Detail}></Route>
              <Route path="/login" exact component={Login}></Route>
              <Route path="/register" exact component={Register}></Route>
            </div>
          </Router>
        </div>
      </Provider>
    )
  }
} 

export default App;
