import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import './leftNavigation.css';

class LeftNavigation extends Component{
    render(){
        return(
            <Nav defaultActiveKey="/home" className=" left-navigation justify-content-center">
            <Nav.Link href="/home" className='border-right center'> 
                <span _ngcontent-reu-c19="" className="material-icons icon-image-preview nav-default ">dashboard</span>
            </Nav.Link>
            <Nav.Link eventKey="link-1" className='border-right'>
            <span _ngcontent-reu-c19="" className="material-icons icon-image-preview nav-default">account_circle</span>
            </Nav.Link>
            <Nav.Link eventKey="link-1" className='border-right'>
            <span _ngcontent-reu-c19="" className="material-icons icon-image-preview nav-default">mail</span>
            </Nav.Link>
            <Nav.Link eventKey="link-2" className='border-right'>
            <span _ngcontent-reu-c19="" className="material-icons icon-image-preview nav-default">work</span>
            </Nav.Link>
            </Nav>
        );
    }
}

export {LeftNavigation}