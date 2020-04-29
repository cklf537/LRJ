import React from "react";
import { Navbar, Row, Col } from "react-bootstrap";
import './footer.css'

const Footer = props => {
    return (
        <Row className="lrj-footer-bg">
            <Col sm={6} lg={10} md={12} xl={10} xs={12} style={{ margin: '0 auto', paddingTop: '10px' }}>
                <Row>
                    <Col sm={6} lg={6} md={6} xl={6} xs={6}>
                        <p> Local Remote Jobs.<span>&copy; Copyrights 2020 </span></p> 
                    </Col>
                    <Col sm={6} lg={6} md={6} xl={6} xs={6}>
                        <ul className="list">
                            <li>Terms</li>
                            <li>Privacy </li>
                            <li>Guidelines</li>
                        </ul>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Footer;