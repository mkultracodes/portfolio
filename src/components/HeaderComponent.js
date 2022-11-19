import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='/favicon.ico.png' height="30" width="41" alt='MK Logo' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                <a className="btn btn-social-icon btn-github" href="http:////github.com/mkultracodes/" target="_blank"><i className="fa fa-github"></i></a>
                                </NavItem>
                            {/*<NavItem>
                                <NavLink className="nav-link"  to='/aboutus'>About Us</NavLink>
                            </NavItem> */}
                            {/*<NavItem>
                                <NavLink className="nav-link" to='/contactus'>Contact Us</NavLink>
                            </NavItem> */}
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Welcome</h1>
                                <p>Blurb that makes me sound fantastic</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;