import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBIcon, MDBBtn
} from 'mdb-react-ui-kit';
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
state = {
  isOpen: false,
  active: [true, null, null, null, null]
  
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

toggleCollapseFalse = () => {
  this.setState({ isOpen: false });
}

toggleActive = (ind) => {
  const activeitems = this.state.active.slice();
  activeitems.forEach(function (item, index) {
    activeitems.splice(index, 1, null);
  });
  activeitems.splice(ind, 1, true);
  this.setState({active: activeitems})
}

render() {
  const active = this.state.active;
  return (
    <Router>
        <MDBNavbar bgColor='white'
                   light
                   expand="md"    
                   fixed="top"
        >
        <MDBContainer>
        <MDBNavbarBrand>
          <strong className="text-dark">Zlot XXX lecia</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler 
                    type="button"
                    onClick={this.toggleCollapse} 
                    color="	#0000FF"
        >

          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse show={this.state.isOpen} navbar>
          <MDBNavbarNav left className='mr-auto mb mb-lg-0'>
            <MDBNavbarItem active={active[0]}>
              <MDBNavbarLink className="nav-link, black-text" to="#!" onClick={() => {this.props.handleClick("mainpage");this.toggleCollapseFalse();this.toggleActive(0)}}>Informacje</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem active={active[1]}>
              <MDBNavbarLink className="nav-link, black-text" to="#!" onClick={() => {this.props.handleClick("newspage");this.toggleCollapseFalse();this.toggleActive(1)}}>Aktualności</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem active={active[2]}>
              <MDBNavbarLink className="nav-link, black-text" to="#!" onClick={() => {this.props.handleClick("contactpage");this.toggleCollapseFalse();this.toggleActive(2)}}>Kontakt</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem active={active[3]}>
              <MDBNavbarLink className="nav-link, black-text" to="#!" onClick={() => {this.props.handleClick("songpage");this.toggleCollapseFalse();this.toggleActive(3)}}>Piosenka</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          
        </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;