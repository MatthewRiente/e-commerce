import React, { Component } from 'react';
import './css/index.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__container">
          <h1 className="footer__container__head1"> All images used for educational purposes </h1>
          <div className="footer__container__nav">
            <nav>
              <ul>
                <li className="footer__container__nav__link">example</li>
                <li className="footer__container__nav__link">example</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;