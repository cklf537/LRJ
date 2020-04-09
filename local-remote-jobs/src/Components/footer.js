import React from "react";
import { Navbar, Row, Col } from "react-bootstrap";
import './footer.css'

const Footer = (props)=>{
    return (
        <Row className="lrj-footer-bg">
            <Col ><h4 > Local Remote Jobs.</h4> <p inline>&copy; Copyrights 2020</p> </Col>
        </Row>
        // <Navbar className="lrj-footer-bg">
        // <Navbar.Brand><h4>Local Remote Jobs.</h4></Navbar.Brand>
        // <Navbar.Toggle />
        // <Navbar.Collapse className="justify-content-end">
        //     <Navbar.Text>
        //     &copy; Copyrights 2020 
        //     </Navbar.Text>
        // </Navbar.Collapse>
        // </Navbar>
    );
}

export default Footer;