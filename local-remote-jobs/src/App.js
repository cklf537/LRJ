import React, { Component } from 'react';
import 'react-bootstrap/Container'
import {Container, Row, Col } from 'react-bootstrap';
 

class App extends Component {
  render(){
  return (
      <Container fluid>
        <Row>
          <Col md={2} className='border border-primary'>Logo Section</Col>
          <Col md={10}> Right Header Seaction</Col>
        </Row>
        <Row>
        <Col md={2} border={1}>name</Col>
        <Col md={10}>left Navigation</Col>
        </Row>
      </Container>
      // <div className="App">
      //   <p>My First Hello React! app</p>
      // </div>
    );
  }
}

export default App;
