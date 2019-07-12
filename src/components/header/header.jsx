import React, { Component } from 'react';
import logo from './../../img/thumb1.png';
import { Link } from 'react-router-dom';
import Nav from './../navBar/';
import './header.css';
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div id="branding">
            <Link to="/">
              <h1>
                <img src={logo} width="30px" />
                <span className="highlight">Politico</span>
              </h1>
            </Link>
          </div>
          <Nav />
        </div>
      </div>
    );
  }
}
export default Header;
