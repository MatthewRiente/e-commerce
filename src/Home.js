import React, { Component } from 'react';
import './css/index.scss';
import Hero from "./Hero";
import Main from './Main';

class Home extends Component {
  render() {
    return (
      <div className="Body">
      <Hero />
      <Main />
      </div>
    );
  }
}

export default Home;
