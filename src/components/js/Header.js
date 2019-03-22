import React from 'react';

import '../css/Header.css' ;

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
 } from 'reactstrap';


import {NavLink} from "react-router-dom"
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
      <div className="header-navbar container-fluid"> 
        <Navbar color="white" light expand="md">
          
          <NavbarBrand href="/">
            <img className="brand-logo" src={require("../images/Logo.png")} alt="Logo" />
            <a className="logo-text"> Hardware3D</a>
          </NavbarBrand>

          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              
              <NavItem>
                <NavLink className="nav-link"to="/products/">Store</NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink className="nav-link"to="/productscar/">My Cart</NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="nav-link"to="/search/">Search</NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="nav-link"to="/signin/"><b>SignIn</b></NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="nav-link"to="/login/"><b>LogIn</b></NavLink>
              </NavItem>
            </Nav>
          </Collapse>

        </Navbar>
      </div>
    );
  }
}
