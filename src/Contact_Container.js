import React, { Component } from 'react';
import './css/index.scss';
import Hero from "./Hero";
import Contact from './Contact'

class Container extends Component {
  render() {
    return (
      <div>
      <Hero />
      <Contact />
      </div>
    );
  }
}

export default Container;