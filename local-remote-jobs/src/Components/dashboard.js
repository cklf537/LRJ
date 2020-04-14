import React, {Component} from 'react';
import {Col } from "react-bootstrap";
import  DashBoardLeftNavigation   from '../Components/leftNavigation';
import { MainContent }  from './mainContent';


class Dashboard extends Component{
    render(){
        console.log("test", this.route);

     
        return (
        <React.Fragment>
            <Col lg={1} md={1} sm={1} xs={1} className="d-none d-xl-block d-md-block d-sm-block d-xs-block  pt-3" >
                {/* <DashBoardLeftNavigation ldate={this.state} /> */}
            </Col>
            <Col xs={12} sm={12} md={11} lg={11} xl={11} className=" pt-3">
                {/* <MainContent /> */}
            </Col>
            
          </React.Fragment>
        );
    }
}

export default Dashboard;