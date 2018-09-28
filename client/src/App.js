import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './frog.png';
import './App.css';
import Nav from './components/nav/nav';
import Homepage from './components/homepage/Homepage';


class App extends Component {
  render() {
    const App = () => (
      <div>
        <Nav />
        <Switch>          
          <Route path='/' exact component={Homepage}/>
        </Switch>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Nibbles is under contruction.</h1>
        </header>    
      </div>
    )
    return (
      <Switch>        
        <App/>            
      </Switch>
    );
  }
}

export default App;