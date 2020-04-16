import React from "react";
import { Nav,Navbar,  } from "react-bootstrap";
import {NavLink, withRouter} from 'react-router-dom';
import '../Components/header.css';

const Header = (props)=>{
    // console.log(props);
    let {logo} = props.hdata.Landing;
    return (
        <Navbar expand="lg" className='lrj-header-bg pt-0 pb-0 mt-0 mb-0' fixed="top" sm={6} lg={10} md={12} xl={10} xs={12} >
        <NavLink to="/"><h1 className="lrj-logo">{logo}</h1></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav as='ul'>
                <Nav.Item as='li'>
                   <NavLink to="/register">Register</NavLink>
                </Nav.Item>
                <Nav.Item as='li'>
                    <NavLink to="/login">Login</NavLink>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;