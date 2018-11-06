import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import f from "./flow.css";
import Type from "./type/type";
import Breed from "./breed/breed";
import Name from "./petname/petname";
import Zipcode from "./zipcode/zipcode";
import Email from "./email/email";
import withStyles from 'isomorphic-style-loader/lib/withStyles'


class Flow extends Component {
  constructor(props) {
    super(props);

    let pages;
    if (__isBrowser__) {
      pages = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    } else {              
      pages = this.props.staticContext.data;
    }

    this.state = {
      pages,
      loading: pages ? false : true
    };

    this.fetchQuoteFlo = this.fetchQuoteFlo.bind(this);
  }
  componentDidMount() {
    if (!this.state.pages) {
      this.fetchQuoteFlo(this.props.match.params.id);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchQuoteFlo(this.props.match.params.id);
    }
  }
  fetchQuoteFlo(page) {
    this.setState(() => ({
      loading: true,
      pages: page,
      loading: false
    }));
  }
  render() {
    const { loading, pages } = this.state;

    const selPage = {
      Type,
      Name,
      Breed,
      Email,
      Zipcode
    }
    

    const Flow = () => (
      <div>
        <Switch>
          <Route path={`/flow/:${pages}`} exact component={selPage[pages]} />
        </Switch>
      </div>
    );
    if (loading === true) {
      return <p>LOADING</p>;
    } else {
      return (
        <Switch>
          <Flow />
        </Switch>
      );
    }
  }
}

export default withStyles(f)(Flow);
