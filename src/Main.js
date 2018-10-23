import React, { Component } from 'react';
import './css/index.scss';
import Hero from './Hero';
import statue from "./imgs/statue.png";

class Main extends Component {
  render() {
    return (
      <div>
        <section>
          <Hero />
        </section>
        <section className="main__container">
          <div className="main__container__content1">
            <div className="main__container__content1__text">
              <h1> Classic Culture in your hands </h1>
              <p> Finity's goal is to serve as a classic art outlet for an average consumer </p>
            </div>
            <img className="main__container__content1__bg" src={statue} alt="Statue of David" />
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
