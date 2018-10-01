import React, { Component } from "react";
import nib from "../../Assets/nib.svg";
import { Button, Row, Col, Container } from "reactstrap";
import "./Homepage.css";
import NibFoot from "../NibFoot/NibFoot";
import frog from "../../Assets/frog.png";
import dog from "../../Assets/dog.png";
import hedgehog from "../../Assets/porcupine.png";
import cat from "../../Assets/Untitled-2.png";
import Taco from "../../Assets/Taco@2x.svg";
import Umbrella from "../../Assets/Umbrella@2x.svg";
import Heart from "../../Assets/Combined Shape@2x.svg";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Container fluid className="Homepage">
          <Col>
            <Row>
              <img id="nib" src={nib} className="App-nib" alt="nib" />
            </Row>
            <Row>
              <Col className="text-center">
                <h1 id="bgMotto">
                  Rain or Shine we will keep your pets safe, happy and healthy!
                </h1>
                <p id="mottoBld">
                  Get a pet insurance quote today, as low as $5!
                </p>
                <Button id="greenBtn" color="success" size="lg">
                  Get Started
                </Button>
              </Col>
            </Row>
            <Row id="animals">
              <Col className="text-center">
                <img id="cat" src={cat} alt="cat" />
              </Col>
              <Col className="text-center">                     
                <img id="dog" src={dog} alt="dog" />
              </Col>
            </Row>
          </Col>
        </Container>
        <Container id="blueBar" fluid>

        </Container>
        <Container>
          <Row>
            <Col className="text-center">
              <h1 id="whyBuy">Why buy pet insurance?</h1>
            </Col>
          </Row>
          <Row>
            <Col md="4" id="whyBloc">
              <Row>
                <Col>
                  <img id="whyImg" src={Umbrella} alt="Umbrella" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2 id="whyHead">Keep your pet safe</h2>
                  <p id="whyCon">
                    If your pet gets ill or injured we will be here to help you.
                    We even help with prescription medication, treatments and
                    more.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col md="4"  id="whyBloc">
              <Row>
                <Col>
                  <img id="whyImg" src={Heart} alt="Heart" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2 id="whyHead">Peace of mind</h2>
                  <p id="whyCon">
                    Rest easy knowing that the pet you love is covered in the
                    event of an accident or injury.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col  md="4" id="whyBloc">
              <Row>
                <Col>
                  <img id="whyImg" src={Taco} alt="Taco" />
                </Col>                
              </Row>
              <Row>
                <Col>
                  <h2 id="whyHead">It is affordable</h2>
                  <p id="whyCon">
                    Our pet insurance plan start at only $8 per month. Your pet is
                    worth more than a taco dinner.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col className="text-center">
              <Button id="greenBtn" color="success" size="lg">
                Get Started
              </Button>
            </Col>           
          </Row>
        </Container>
        <NibFoot/>
      </div>
    );
  }
}

export default Homepage;
