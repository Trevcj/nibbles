import React, { Component } from "react";
import l from  "./loginModal.css";
import { FormGroup, Label, Input } from "reactstrap";
import withStyles from 'isomorphic-style-loader/lib/withStyles'

class loginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({});
  }

  render() {
    return (
      <div>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="email@nibbl.es"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password"
          />
        </FormGroup>
      </div>
    );
  }
}

export default withStyles(l)(loginModal);
