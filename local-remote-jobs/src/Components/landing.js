import React, { Component } from 'react';
import { Col, Card, Row, Button } from "react-bootstrap";
import Search from "../Components/search/search";
import './landing.css';

class Landing extends Component {
  render() {
    return (
      <Col className="pt-3">
      <Row>
        <Col className="search-tag-line"> 
        <h2 >Search for your "Local Remote Job."</h2>
        <Search />
        </Col>
      </Row>
        <Row>
          <Col><Card style={{ width: '15rem' }}>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>Primary Color</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Primary</Button>
            </Card.Body>
          </Card></Col>
          <Col><Card style={{ width: '15rem' }}>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>Secondary Color</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="secondary">Secondary</Button>
            </Card.Body>
          </Card></Col>
          <Col><Card style={{ width: '15rem' }}>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>Success Color</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="success">Success</Button>
            </Card.Body>
          </Card></Col>
          <Col><Card style={{ width: '15rem' }}>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>Warning Color</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="warning">Warning</Button>
            </Card.Body>
          </Card></Col>
        </Row>

      </Col>
    );
  }
}

export default Landing;