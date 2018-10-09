import React, { Component } from "react";
import nib from "../../Assets/nib.svg";
import LoginModal from "./loginModal/loginModal";
import "./NibNav.css";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

class NibNav extends Component {
  componentDidMount() {
    const path = window.location.href;
    if (path.includes("flow")) {
      this.setState({
        expand: "false"
      });
    }
  }

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.modal = this.modal.bind(this);
    this.state = {
      isOpen: false,
      modal: false,
      expand: "md"
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  modal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className={this.state.expand === "false" ? "NibNav botBorder" : "NibNav"}>
        <Navbar color="light" light expand={this.state.expand}>
          <NavbarToggler id="burgerBtn" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">FAQ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Claims</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Giveback</NavLink>
              </NavItem>
            </Nav>
            <NavLink id="log" onClick={this.modal}>
              Login
            </NavLink>
          </Collapse>
          <img id="navLogo" src={nib} className={this.state.expand === "false" ? "navLogo" : "hidden"} alt="nib" />
        </Navbar>

        <div>
          <Modal isOpen={this.state.modal} toggle={this.modal}>
            <ModalHeader toggle={this.modal}>Login</ModalHeader>
            <ModalBody>
              <LoginModal />
            </ModalBody>
            <ModalFooter>
              <Button id="loginBtn" color="primary" onClick={this.modal}>
                Login
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default NibNav;
