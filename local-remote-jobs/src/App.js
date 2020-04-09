
// import { Header } from './Components/archive/topHeader'
// import { RightHeader } from './Components/archive/rightHeader';
// import { UserProfile } from './Components/archive/UserProfile'; 

import React, { Component } from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import { data } from './data/app-data';
import Header from "./Components/header";
import LeftNavigation from "./Components/leftNavigation";
import Footer from "./Components/footer";
import MainContent from "./Components/mainContent";
import './app.css';
 

class App extends Component {
  state = {
    ...data
  }
  render(){
  return (
      <Container className='global-class' fluid >
        <Row>
          <Col className='ljr-header-outer' ></Col>
          <Col sm={6} lg={10} md={12} xl={10} xs={12} className='pl-0 pr-0 ljr-headder-inner'>
            <Header hdata={this.state.header} />
          </Col>
          <Col className='ljr-header-outer'></Col>
        </Row>
        <Row className="lrj-content-inner">
        <Col className=''></Col>
          <Col sm={6} lg={10} md={12} xl={10} xs={12} >
            <Row>
              <Col lg={1} md={1} sm={1} xs={1} className="d-none d-xl-block d-md-block d-sm-block d-xs-block  pt-3" >
                <LeftNavigation ldate={this.state.leftNavigation} />
              </Col>
              <Col xs={12} sm={12} md={11} lg={11} xl={11} className=" pt-3">
                <MainContent />
              </Col>
            </Row>
          </Col>
          <Col className='testClass'></Col>
        </Row>
        <Row className='border-top'>
        <Col></Col>
          <Col sm={6} lg={10} md={12} xl={10} xs={12} className="">
            <Footer fdate={this.state.footer} />
          </Col>
          <Col className=''></Col>
        </Row>
        
      </Container>
    );
  }
}

export default App;
