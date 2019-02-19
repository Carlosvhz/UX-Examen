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
                <NavLink href="/products/">Store</NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink href="/productscar/">My Cart</NavLink>
              </NavItem>

              <NavItem>
                <div class="topnav">
                <form action="/action_page.php">
                  <input type="text" placeholder="Search.." name="search"/>

                  <a className='button' type="submit">
                    <img className="brand-search" src={require("../images/Search.png")} alt="Logo" href="#" />
                  </a>

                </form>
                </div> 
              </NavItem>

            </Nav>
          </Collapse>

        </Navbar>
      </div>
    );
  }
}
