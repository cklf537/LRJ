// import 'react-bootstrap/Container'
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
        <Row>
        <Col className='border'></Col>
          <Col sm={6} lg={10} md={12} xl={10} xs={12}>
            <Row>
              <Col lg={2} md={2} sm={2} xs={2} className="d-none d-xl-block d-md-block d-sm-block d-xs-block border" >
                <LeftNavigation ldate={this.state.leftNavigation} />
              </Col>
              <Col xs={12} sm={12} md={10} lg={10} xl={10} className="border">
                <MainContent />
              </Col>
            </Row>
          </Col>
          <Col className='border'></Col>
        </Row>
        <Row>
        <Col className='border'></Col>
          <Col sm={6} lg={10} md={12} xl={10} xs={12}>
            <Footer fdate={this.state.footer} />
          </Col>
          <Col className='border'></Col>
        </Row>
        {/* <Row className='pt-3 border-bottom'>
          <Col xs={1} className='logo-outer '>
            <Header hobject={this.state.header}  />
          </Col>
          <Col className='list-item '> <RightHeader RNavigationData={this.state.header.right} /> </Col>
        </Row>
        <Row className=''>
          <Col className=' p-2'>
            <UserProfile />
          </Col>
        </Row>   */}
      </Container>
    );
  }
}

export default App;
