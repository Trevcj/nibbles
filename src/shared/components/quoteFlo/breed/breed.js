import React, { Component } from "react";
import b from "./breed.css";
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
import Pure from "../../../Assets/PureBread.svg";
import Mixed from "../../../Assets/Mixed.svg";

class Breed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breed: "",
      breedType: "",
      breedSelected: false,
      fadeIn: false,
      btnFade: false,
      pure: true,
      mixed: true
    };

    this.pure = this.pure.bind(this);
    this.mixed = this.mixed.bind(this);
    this.submit = this.submit.bind(this);
    this.select = this.select.bind(this);
  }

  pure(e) {
    e.preventDefault();
    this.setState({
      breed: "pure",
      fadeIn: true,
      btnFade: true,
      mixed: false,
      pure: true
    });
  }
  mixed(e) {
    e.preventDefault();
    this.setState({
      breed: "mixed",
      fadeIn: false,
      btnFade: true,
      pure: false,
      mixed: true
    });
  }
  submit(e) {
    e.preventDefault();
    window.location.href = "/flow/Zipcode";
  }
  select(e) {
    e.preventDefault();
    this.setState({
      breedType: e.target.value,
      breedSelected: true
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
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <h1 id="floHead">What breed is !Petname?</h1>
          </Col>
        </Row>
        <Row id="breedSel" className="text-center">
          <Col>
            <img
              className={this.state.pure ? "" : "greyScale"}
              onClick={this.pure}
              id="petLg"
              src={Pure}
              alt="Pure Bred Cat"
            />
            <h4 id="breedNames">Purebred</h4>
          </Col>
          <Col>
            <img
              className={this.state.mixed ? "" : "greyScale"}
              onClick={this.mixed}
              id="petLg"
              src={Mixed}
              alt="Mixed Breed Cat"
            />
            <h4 id="breedNames">Mixed</h4>
          </Col>
        </Row>
        <Fade in={this.state.fadeIn} className="mt-3">
          <Row id="breedInput">
            <Col>
              <FormGroup>
                <Label id="inputTitle" for="breedSelect">What kind of bread?</Label>
                <Input
                  bsSize="lg"
                  type="select"
                  name="breedSelect"
                  id="breedSelect"
                  onChange={this.select}
                >
                  <option hidden>Select a bread</option>
                  <option>Wheat</option>
                  <option>Rye</option>
                  <option>White</option>
                  <option>Peta</option>
                  <option>Sour Dough</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </Fade>
        <Fade in={this.state.btnFade} className="mt-3">
          <Row>
            <Col className="text-center">
              <Button
                disabled={
                  this.state.mixed || this.state.breedSelected ? false : true
                }
                id="yellowNext"
                color="warning"
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

export default withStyles(b)(Breed);
