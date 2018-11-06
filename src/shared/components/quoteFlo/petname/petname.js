import React, { Component } from "react";
import p from "./petname.css";
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

class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petName: "",
      btnFade: false,
      name: false
    };

    this.submit = this.submit.bind(this);
    this.input = this.input.bind(this);
  }

  submit(e) {
    e.preventDefault();
    window.location.href = "/flow/Breed";
  }
  input(e) {
    e.preventDefault();
    this.setState({
      petName: e.target.value,
      name: true,
      btnFade: true
    });
  }

  render() {
    return (
      <Container>
        <Row id="petInfo" className="text-center">
          <Col>
            <img id="petSm" src={Mixed} alt="Mixed Breed Cat" />
          </Col>
        </Row>
        <Row id="headRow" className="text-center">
          <Col>
            <h2 id="floHead">We love !pet! What is your pets name?</h2>
          </Col>
        </Row>
        <Row id="breedInput">
          <Col>
            <FormGroup>
              <Label id="inputTitle" for="petName">
                Pet's Name
              </Label>
              <Input
                onChange={this.input}
                bsSize="lg"
                type="text"
                name="petName"
                id="petName"
                placeholder="Captain Teddy"
              />
            </FormGroup>
          </Col>
        </Row>
        <Fade in={this.state.btnFade} className="mt-3">
          <Row>
            <Col className="text-center">
              <Button
                disabled={this.state.name ? false : true}
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

export default withStyles(p)(Name);
