import React, {Component} from 'react';
import {Col } from "react-bootstrap";
import { LeftNavigation }  from './leftNavigation';
import { MainContent }  from './mainContent';


class Dashboard extends Component{
    render(){
        return (
        <React.Fragment>
            <Col lg={1} md={1} sm={1} xs={1} className="d-none d-xl-block d-md-block d-sm-block d-xs-block  pt-3" >
                {/* <LeftNavigation ldate={this.state.leftNavigation} /> */}
            </Col>
            <Col xs={12} sm={12} md={11} lg={11} xl={11} className=" pt-3">
                {/* <MainContent /> */}
            </Col>
          </React.Fragment>
        );
    }
}

export default Dashboard;