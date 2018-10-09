import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NibNav from "./components/NibNav/NibNav";
import Homepage from "./components/homepage/Homepage";
import Flow from "./components/quoteFlo/flow";

class App extends Component {
  render() {
    const App = () => (
      <div>
        <NibNav />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/flow" component={Flow} />
        </Switch>
      </div>
    );
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;
