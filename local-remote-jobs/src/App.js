import React, { Component } from 'react';
import 'react-bootstrap/Container'
import {Container, Row, Col } from 'react-bootstrap';

import { Header } from './Components/topHeader'
import { RightHeader } from './Components/rightHeader';
import { UserProfile } from './Components/UserProfile'; 
import { data } from './data/app-data';
 

class App extends Component {
  state = {
    ...data
  }
  render(){
  return (
      <Container className='global-class'   >
        <Row className='pt-3 border-bottom'>
          <Col xs={1} className='logo-outer '>
            <Header hobject={this.state.header}  />
          </Col>
          {/* <Col className='ml-0 pl-0'><h4 className='ljr-sublogo'>{this.state.header.left.loboSubTitile}</h4></Col> */}
          <Col className='list-item '> <RightHeader RNavigationData={this.state.header.right} /> </Col>
        </Row>
        <Row className=''>
          <Col className=' p-2'>
            <UserProfile />
          </Col>
        </Row>  
      </Container>
    );
  }
}

export default App;
