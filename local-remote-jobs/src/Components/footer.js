import React from "react";
import { Navbar, Row, Col } from "react-bootstrap";
import './footer.css'

const Footer = (props)=>{
    return (
        <Row className="lrj-footer-bg">
            <Col ><h4 > Local Remote Jobs.</h4> <p>&copy; Copyrights 2020</p> </Col>
        </Row>
    );
}

export default Footer;