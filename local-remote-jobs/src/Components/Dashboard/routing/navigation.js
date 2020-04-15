import React from "react";
import { Link, } from "react-router-dom";
import { Navbar, Nav, Col, Row } from "react-bootstrap";
import './dashboardNavigation.css';

const Navigation = (props) => {
    const { nav } = props.nav;
    const navlis = nav.map((navItem, index) => {
        return (
            <div key={index} className='pb-2 pt-2  '>
                <Link to={`/dashboard/${navItem.path}`} >
                    <Row className="p-0 m-0">
                    <Col xs={11} className=" p-0 m-0"><span className="material-icons">{navItem.icon}</span><span> {navItem.title} </span> </Col>
                    <Col xs={1} className=" p-0 m-0"><span class="material-icons nav-arrow-reverse">play_arrow</span></Col>
                    </Row>
                </Link>
            </div>
        )
    })
    return (
        <Nav defaultActiveKey="/home" className="flex-column ">
            {navlis}
        </Nav>
    );
}

export default Navigation;