import React, { Component } from "react"
import { Nav} from "react-bootstrap";

import './topHeader.css';


class RightHeader extends Component{
    
    render(){
        let navObject = Object.values(this.props.RNavigationData);
        return(
            <Nav className='justify-content-end ' defaultActiveKey="/home" as="ul"  >
                {
                    navObject.map(TRNavData=>{
                    return(
                        <Nav.Item as="li" key={TRNavData}>
                            <Nav.Link href="/home" ><span _ngcontent-reu-c19="" className="material-icons icon-image-preview nav-default">{TRNavData}</span></Nav.Link>
                        </Nav.Item>
                        ) 
                    })
                }
            </Nav>
        );
    }
}

export {RightHeader};