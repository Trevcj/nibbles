import React, { Component } from 'react';
import './nav.css';
import nib from '../../Assets/nib.png'

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className = "header-main">
            <ul className="header-menu">
                <li id="menuNames">Home</li>
                <li id="menuNames">FAQ</li>
                <li id="menuNames">Claims</li>
                <li id="menuNames">Giveback</li>
                <li id="menuNames">Blog</li>
                <li id="menuNames">API</li>
            </ul> 
        </div>
        <div className="mainLogo">
            <img id="nib" src={nib} className="App-nib" alt="nib" />
        </div>
      </div>
    );
  }
}

export default Nav;
