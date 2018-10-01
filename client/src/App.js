import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NibNav from './components/NibNav/NibNav';
import Homepage from './components/homepage/Homepage';


class App extends Component {
  render() {
    const App = () => (
      <div>
        <NibNav />
        <Switch>          
          <Route path='/' exact component={Homepage}/>
        </Switch>            
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