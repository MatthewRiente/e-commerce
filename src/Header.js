import React, { Component } from 'react';
import './css/index.scss';
import logo from "./imgs/logo.png";
import { Link } from 'react-router-dom'


class Header extends Component {
  render() {
    return (
      <div className="header__container">
        <h1 className="header__container__head1"> Finity </h1>
            <img className="header__container__logo" src={logo} alt="logo" />
        <div className="header__container__nav">
        <nav>
            <ul>
                <li className="header__container__nav__link"><Link to='/'> Home </Link></li>
                <li className="header__container__nav__link"><Link to='/Container'> Products </Link></li>
                <li className="header__container__nav__link"><Link to='/Contact_Container'> Contact </Link></li>
            </ul>
        </nav>
        </div>
      </div>
    );
  }
}

export default Header;