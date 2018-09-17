import React, { Component } from 'react';
import './css/index.scss';
import statue from "./imgs/statue.png";

class Main extends Component {
  render() {
    return (
      <section className="main__container">
        <div className="main__container__content1">
          <div className="main__container__content1__text">
            <h2> Classic Culture in your hands </h2>
            <p> Finity's goal is to serve as a classic art outlet for the consumer </p>
          </div>
          <img className="main__container__content1__bg" src={statue} alt="Statue of David" />
        </div>
      </section>
    );
  }
}

export default Main;