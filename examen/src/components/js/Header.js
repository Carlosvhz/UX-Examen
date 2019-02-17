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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

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
          
        <a class="navbar-brand" rel="home" href="#" title="">
          <img style="max-width:100px; margin-top: -7px;" src="../image/cms.png"/>
        </a>

          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Productos
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink href="/Soporte/">Soporte</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/Comunidad/">Comunidad</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>

        </Navbar>
      </div>
    );
  }
}
