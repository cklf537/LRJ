import React from "react";
import { Navbar } from "react-bootstrap";

const Footer = (props)=>{
    return (
        <Navbar>
        <Navbar.Brand href="#home">Local Remote Jobs.</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            &copy; Copyrights 2020 
            </Navbar.Text>
        </Navbar.Collapse>
        </Navbar>
    );
}

export default Footer;