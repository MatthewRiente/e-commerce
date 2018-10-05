import React, { Component } from 'react';
import './css/index.scss';
import logo from "./imgs/logo.png";
import { Link } from 'react-router-dom';
import auth0Client from './Auth/Auth'

class Header extends Component {
  render() {
    return (
      <div className="header__container">
        <h1 className="header__container__head1"> Finity </h1>
            <img className="header__container__logo" src={logo} alt="logo" />
        <nav className="header__container__nav">
            <ul>
                <li className="header__container__nav__link"><Link to='/'> Home </Link></li>
                <li className="header__container__nav__link"><Link to='/Products'> Products </Link></li>
                <li className="header__container__nav__link"><Link to='/Contact'> Contact </Link></li>
                <li className="header__container__nav__link"><Link to='/Admin'> Admin Page </Link></li>
            </ul>
            { !auth0Client.isAuthenticated() &&
              <button className="signButton" onClick={auth0Client.signIn}>Sign In</button>
            }
            { auth0Client.isAuthenticated() &&
              <div>
                <label className="profileName">{auth0Client.getProfile().name}</label>
                <button className="signButton" onClick={() => { auth0Client.signOut()}}>Sign Out</button>
              </div> 
            }
        </nav>
      </div>

      
    );
  }
}

export default Header;