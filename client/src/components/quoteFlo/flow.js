import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./flow.css";
import Type from "./type/type"
import Breed from "./breed/breed"
import PetName from "./petname/petname"
import Zipcode from "./zipcode/zipcode"
import Email from "./email/email"

class Flow extends Component {
  render() {
    const Flow = () => (
      <div>
        <Switch>
          <Route path="/flow" exact component={Type} />
          <Route path="/flow/Name" exact component={PetName} />
          <Route path="/flow/Breed" exact component={Breed} />
          <Route path="/flow/Zipcode" exact component={Zipcode} />
          <Route path="/flow/Email" exact component={Email} />
          {/* <Route path="/flow/Quote" exact component={Quote} /> */}
          {/* <Route path="/flow/Customize" exact component={Customize} /> */}
          {/* <Route path="/flow/vetInfo" exact component={vetInfo} /> */}
          {/* <Route path="/flow/Payment" exact component={Payment} /> */}
        </Switch>
      </div>
    );
    return (
      <Switch>
        <Flow />
      </Switch>
    );
  }
}

export default Flow;
