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
          
          <NavbarBrand href="/">UX - Examen</NavbarBrand>

          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Productos
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Motherboards
                  </DropdownItem>
                  <DropdownItem>
                    GPU's
                  </DropdownItem>
                  <DropdownItem>
                    CPU's
                  </DropdownItem>
                  <DropdownItem>
                    RAM
                  </DropdownItem>
                  <DropdownItem>
                    ROM Devices
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink href="/Soporte/">Support</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/Comunidad/">Comunity</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>

        </Navbar>
      </div>
    );
  }
}
