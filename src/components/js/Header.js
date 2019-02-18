import React from 'react';

import '../css/Header.css' ;

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';

export default class Header extends React.Component {
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
      <div className="container-fluid"> 
        <Navbar color="white" light expand="md">
          
          <NavbarBrand href="/">
            <img className="brand-logo" src={require("../images/Logo.png")} alt="Logo" />
          </NavbarBrand>

          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              
              <NavItem>
                <NavLink href="/products/">Store</NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink href="/productscar/">My Car</NavLink>
              </NavItem>

            </Nav>
          </Collapse>

        </Navbar>
      </div>
    );
  }
}
