import React, { Component } from 'react';
import MainHeader from './view/mainHeader';
import MainFooter from './view/mainFooter';
import RouterIndex from './router/index'
import "./view/index.css";

class App extends Component {
  render() {
    return (
      <div className = "pageWrap">
        <MainHeader></MainHeader>
        <div className="main">
          <RouterIndex />
        </div>
      </div>
    );
  }
}

export default App;
