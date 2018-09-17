import React, { Component } from 'react';
import './css/index.scss';
import Hero from "./Hero";
import Products from "./Products"

class Container extends Component {
  render() {
    return (
      <div className="Body">
      <Hero />
      <Products />
      </div>
    );
  }
}

export default Container;
