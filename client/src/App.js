import React, { Component } from 'react';
import logo from './frog.png';
import './App.css';
import Nav from './components/nav/nav';
import Homepage from './components/homepage/Homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Homepage />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Nibbles is under contruction.</h1>
        </header>        
      </div>
    );
  }
}

export default App;
