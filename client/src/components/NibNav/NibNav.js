import React, { Component } from 'react';
import './NibNav.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,  
  Nav,
  NavItem,
  NavLink } from 'reactstrap';



class NibNav extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="NibNav"> 
        <div>
          <Navbar color="light" light expand="md">            
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="#">Home</NavLink>
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
              <NavLink id="log" href="#">Log In</NavLink>              
            </Collapse>
          </Navbar>
        </div>        
      </div>      
      
    );
  }
}

export default NibNav;
