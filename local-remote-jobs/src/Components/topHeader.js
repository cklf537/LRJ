import React, { Component } from "react";
import './topHeader.css'
// import { Navbar } from 'react-bootstrap';
// import { Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button, Link, Item, Divider } from "react-bootstrap";

class Header extends Component{
    render(){
        let {left } = this.props.hobject;

        return(
            <React.Fragment>
                <h1 className='lrj-logo'>{left.logo}</h1>
                {/* <small className='p-0 m-0 ljr-sublogo'>{left.loboSubTitile}</small> */}
            </React.Fragment> 
            );
        }
}

export {Header};