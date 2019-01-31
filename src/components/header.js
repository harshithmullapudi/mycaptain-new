import React, { Component } from 'react';
import IIMB from '../assets/home/IIMB.webp';
import Logo from '../assets/home/logo.webp';
import './header.scss';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

class HeaderComponent extends Component {
  constructor(props)
  {
     super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render()
  {
    return(
<div class="NavBarHeader">
  <p className="incubation">
    <span className="text">by an</span>
    <span>
      <img className="IIMB" src={IIMB} />
    </span>
    <span className="text">IIM-B, NSRCEL incubated company.</span>
  </p>
  <hr className="headerLine" />
  <div>
    <Navbar light expand="lg">
      <NavbarBrand href="/">
        {' '}
        <img className="Logo" src={Logo} />
      </NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem className="NavItem">
            <NavLink className="headerNavbar" href="#howitworks">How It Works</NavLink>
          </NavItem>
          <NavItem className="NavItem">
            <NavLink className="headerNavbar" href="/components/">Become a Captain</NavLink>
          </NavItem>
          <NavItem className="NavItem">
            <NavLink className="headerNavbar" href="/components/">Join Our Team</NavLink>
          </NavItem>
          <NavItem className="NavItem">
            <NavLink className="headerNavbar" href="/components/">About Us</NavLink>
          </NavItem>
          <NavItem className="NavItem">
            <NavLink className="headerNavbar" href="/components/">Blog</NavLink>
          </NavItem>
          {/*<NavItem className="NavItem signup">
            <Button className="button">SIGN UP</Button>
          </NavItem>*/}
          <NavItem className="NavItem signin">
            <Button className="button" href="https://mycaptainapp.in">SIGN IN</Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
</div>
)
}
}
export default HeaderComponent;