import React, { Component } from "react";
import "./zipcode.css";
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

class Zipcode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: "",
      btnFade: false,
      zip: false
    };

    this.submit = this.submit.bind(this);
    this.input = this.input.bind(this);
  }

  submit(e) {
    e.preventDefault();
    window.location.href = "/flow/Email";
  }
  input(e) {
    e.preventDefault();
    this.setState({
      zipcode: e.target.value,
      zip: true,
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
          </Col>
        </Row>
        <Row id="headRow" className="text-center">
          <Col>
            <h2 id="floHead">Where does !petname live?</h2>
          </Col>
        </Row>
        <Row id="breedInput">
          <Col>
            <FormGroup>
              <Label id="inputTitle" for="zipcode">
                Zip Code
              </Label>
              <Input
                onChange={this.input}
                bsSize="lg"
                type="text"
                name="zipcode"
                id="zipcode"
                placeholder="12345"
              />
            </FormGroup>
          </Col>
        </Row>
        <Fade in={this.state.btnFade} className="mt-3">
          <Row>
            <Col className="text-center">
              <Button
                disabled={this.state.zip ? false : true}
                id="redNext"
                color="danger"
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

export default Zipcode;
