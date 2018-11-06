import React, { Component } from "react";
import t from "./type.css";
import { Container, Row, Col, Button, Fade } from "reactstrap";
import Mixed from "../../../Assets/Mixed.svg";
import Dog from "../../../Assets/PureBread.svg";
import withStyles from 'isomorphic-style-loader/lib/withStyles'

class Type extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petType: "",
      btnFade: false,
      mixed: true,
      dog: true,
      frog: true
    };

    this.mixed = this.mixed.bind(this);
    this.dog = this.dog.bind(this);
    this.frog = this.frog.bind(this);
    this.submit = this.submit.bind(this);
  }

  mixed(e) {
    e.preventDefault();
    this.setState({
      petType: "Cat",
      btnFade: true,
      mixed: true,
      dog: false,
      frog: false
    });
  }
  dog(e) {
    e.preventDefault();
    this.setState({
      petType: "Dog",
      btnFade: true,
      mixed: false,
      dog: true,
      frog: false
    });
  }
  frog(e) {
    e.preventDefault();
    this.setState({
      petType: "Frog",
      btnFade: true,
      mixed: false,
      dog: false,
      frog: true
    });
  }
  submit(e) {
    e.preventDefault();
    window.location.href = "/flow/Name";
  }
  render() {
    return (
      <Container>
        <Row id="headRow" className="text-center">
          <Col>
            <h2 id="floHead">
              Let's get started, what kind of pet do you have?
            </h2>
          </Col>
        </Row>
        <Row id="typeSel" className="text-center">
          <Col>
            <img
              className={this.state.mixed ? "" : "greyScale"}
              onClick={this.mixed}
              id="petLg"
              src={Mixed}
              alt="Cat"
            />
            <h4 id="breedNames">Cat</h4>
          </Col>
          <Col>
            <img
              className={this.state.dog ? "" : "greyScale"}
              onClick={this.dog}
              id="petLg"
              src={Dog}
              alt="Dog"
            />
            <h4 id="breedNames">Dog</h4>
          </Col>
          <Col>
            <img
              className={this.state.frog ? "" : "greyScale"}
              onClick={this.frog}
              id="petLg"
              src={Mixed}
              alt="Frog"
            />
            <h4 id="breedNames">Exotic</h4>
          </Col>
        </Row>
        <Fade in={this.state.btnFade} className="mt-3">
          <Row>
            <Col className="text-center">
              <Button                
                id="greenNext"
                color="success"
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

export default withStyles(t)(Type);
