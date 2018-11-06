import React, { Component } from "react";
import e from "./email.css";
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import {
  Container,
  Row,
  Col,
  Button,
  Fade,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import Mixed from "../../../Assets/Mixed.svg";

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      btnFade: false,
      click: false
    };

    this.submit = this.submit.bind(this);
    this.input = this.input.bind(this);
  }

  submit(e) {
    e.preventDefault();
    window.location.href = "/";
  }
  input(e) {
    e.preventDefault();
    this.setState({
      email: e.target.value,
      click: true,
      btnFade: true
    });
  }

  render() {
    return (
      <Container>
        <Row id="petInfo">
          <Col xs="6" className="text-center">
            <img id="petSm" src={Mixed} alt="Mixed Breed Cat" />
          </Col>
          <Col xs="6" id="leftAlign" className="d-flex flex-column justify-content-left align-self-center">
            <Row>
              <Col>
                <h6 id="infoHead">!Petname</h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <p id="info">Breed</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p id="info">In Arizona</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row id="headRow" className="text-center">
          <Col>
            <h2 id="floHead">Last Step! What is your email?</h2>
          </Col>
        </Row>
        <Row id="breedInput">
          <Col>
            <FormGroup>
              <Label id="inputTitle" for="email">
                Email
              </Label>
              <Input
                onChange={this.input}
                bsSize="lg"
                type="email"
                name="email"
                id="email"
                placeholder="email@nibbl.es"
              />
            </FormGroup>
          </Col>
        </Row>
        <Fade in={this.state.btnFade} className="mt-3">
          <Row>
            <Col className="text-center">
              <Button
                disabled={this.state.click ? false : true}
                id="blueNext"
                color="primary"
                size="lg"
                onClick={this.submit}
              >
                Next
              </Button>
            </Col>
          </Row>
        </Fade>
      </Container>
    );
  }
}

export default withStyles(e)(Email);
