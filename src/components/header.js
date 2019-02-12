import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  Container,
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
  DropdownItem
} from 'reactstrap'

class Header extends Component {
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
      <div>
        <header id="main-header--materialize">
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">
                Materialize
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link to="/materialize">Lorem</Link>
                </li>
                <li>
                  <Link to="/materialize">Ipsum</Link>
                </li>
                <li>
                  <Link to="/materialize">Example</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <header id="main-header--reactstrap">
          <Navbar color="light" light expand="md">
            <Container>
              <NavbarBrand href="/">Bootstrap</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Lorem</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Ipsum</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Example</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Dropdown
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Option 1</DropdownItem>
                      <DropdownItem>Option 2</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Reset</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink href="https://github.com/delster/opinionated-starter">
                      <FontAwesomeIcon icon="code" />
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </header>
      </div>
    );
  }
}

export default Header