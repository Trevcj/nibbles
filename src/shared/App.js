import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import NibNav from './components/NibNav/NibNav';
import NoMatch from './tools/NoMatch';
import Flow from './components/quoteFlo/flow';
import Homepage from './components/homepage/Homepage';


class App extends Component {
  render() {
    return (
      <div>
        <NibNav />
        <Switch>
          <Route exact path="/" component={(props) => <Homepage {...props} />}/>         
          <Route exact path="/flow/:id" component={(props) => <Flow {...props} />}/>         
          <Route render={(props) => <NoMatch {...props} /> } />
        </Switch>        
      </div>
    )
  }
}

export default App