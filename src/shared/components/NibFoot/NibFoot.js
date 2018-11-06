import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import nf from "./NibFoot.css";
import withStyles from 'isomorphic-style-loader/lib/withStyles'

class NibFoot extends Component {
  render() {
    return (
      <div>
        <Container className="NibFoot" fluid>
          <Row>
            <Col className="text-center">
              <p id="legal">
                Terms of Use <span>&bull;</span> Privacy Policy
              </p>
              <p id="copy">Made in America by Nibbl.es &copy; 2018</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withStyles(nf)(NibFoot);
