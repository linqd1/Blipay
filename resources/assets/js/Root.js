import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import Home from './components/Home'
import Payment from './components/Payment'
import Receive from './components/Receive'
import 'antd-mobile/dist/antd-mobile.css';

export default class Root extends Component {
    render() {
        return (
            <Router>
                <div>
                <Route exact path="/" component={Home}/>
                <Route path="/pay" component={Payment}/>
                <Route path="/receive" component={Receive}/>
                </div>
            </Router>
        )
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
