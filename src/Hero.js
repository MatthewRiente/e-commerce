import React, { Component } from 'react';
import './css/index.scss';
import Slider from "react-slick";
import art1 from "./imgs/art1.jpg";
import art2 from "./imgs/art2.jpg";
import art3 from "./imgs/art3.jpg";
import art4 from "./imgs/art4.jpg";
import art5 from "./imgs/art5.jpg";
import art6 from "./imgs/art6.jpg";

export default class Hero extends Component {
  render() {

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: "ease",
      pauseOnHover: false
    };

    return (
      <div className="hero">
      <div className="hero__current">

      </div>
        <Slider {...settings}>
          <div className="slideItem">
            <img className="art" src={art1} alt="The Starry Night, June 1889" />
            <p className="art__desc"> The Starry Night </p>
          </div>
          <div className="slideItem">
            <img className="art" src={art2} alt="A Sunday Afternoon on the Island of LA Grande Jatte" />
            <p className="art__desc"> A Sunday Afternoon on the Island of LA Grande Jatte </p>
          </div>
          <div className="slideItem">
            <img className="art" src={art3} alt="The Great Wave off Kanagawa" />
            <p className="art__desc"> The Great Wave off Kanagawa </p>
          </div>
          <div className="slideItem">
            <img className="art" src={art4} alt="The Oath of the Horatii" />
            <p className="art__desc"> The Oath of the Horatii </p>
          </div>
          <div className="slideItem">
            <img className="art" src={art5} alt="The Creation Of Adam" />
            <p className="art__desc"> The Creation Of Adam </p>
          </div>
          <div className="slideItem">
            <img className="art" src={art6} alt="Impression, Sunrise" />
            <p className="art__desc"> Impression, Sunrise </p>
          </div>
        </Slider>
      </div>
    );
  }
}
