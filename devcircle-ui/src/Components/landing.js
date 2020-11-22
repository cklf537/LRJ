import React, { Component } from 'react';
import { Col, Card, Row, Button } from "react-bootstrap";
import Search from "../Components/search/search";
import './landing.css';
import { Link } from "react-router-dom";


class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <Col className="banner" sm={6} lg={12} md={12} xl={12} xs={12}>
          <Row >
            <div id="overlay" class="darker"></div>
            <Col sm={6} lg={10} md={12} xl={10} xs={12} style={{ margin: '0 auto', padding: '15px' }}>
              <Row>
                <Col sm={12} lg={12} md={12} xl={12} xs={12}>
                  <div className="bgText">
                    <h3> LRJ for you to post a job or find a job </h3>
                    <p>LRJ helps millions of people find great jobs and love what they do every day. We curate the best digital jobs for those looking to start their telecommuting career.</p>
                    <Button className="bannerBtn" >POST A JOB</Button>
                    <Button  className="bannerBtn" >FIND A JOB</Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col className="pt-3">

          <Row>
            <Col className="search-tag-line" sm={6} lg={10} md={12} xl={10} xs={12}>
              <h2 >Search for your "Local Remote Job."</h2>
              <Search />
            </Col>
          </Row>
          <Row>
            <Col className="search-tag-line" sm={6} lg={10} md={12} xl={10} xs={12}>
              <Col ><Card style={{ width: '15rem', float: 'left', margin: '10px'}}>
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
              <Col><Card style={{ width: '15rem',  float: 'left', margin: '10px' }}>
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
              <Col><Card style={{ width: '15rem', float: 'left', margin: '10px' }}>
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
              <Col><Card style={{ width: '15rem',  float: 'left', margin: '10px' }}>
                <Card.Img variant="top" />
                <Card.Body>
                  <Card.Title>Warning Color</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
              </Card.Text>
                  <Button variant="warning">Warning</Button>
                </Card.Body>
              </Card></Col></Col>
<div className='clear'></div>
            <Col className="content-bg" sm={6} lg={12} md={12} xl={12} xs={12}>
              <Row >
                <Col className="content-bg" sm={6} lg={10} md={12} xl={10} xs={12} style={{ margin: '0 auto', padding: '15px' }}>
                  <Row>
                    <Col  sm={6} lg={6} md={6} xl={6} xs={6}>
                    <div className="bgImage">
                        <img className='img-responsive' src={require('./../data/img/lrj_jobs.png')} alt='lrj job' />
                      </div>
                      
                    </Col>
                    <Col sm={6} lg={6} md={6} xl={6} xs={6}>
                    <div className="bgText">
                        <h3>
                          A job search tailored for you
                </h3>
                        <p>LRJ helps millions of people find great jobs and love what they do every day.</p>
                        <Button variant="primary">Find Out</Button>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col className="content-bg1" sm={6} lg={12} md={12} xl={12} xs={12}>
              <Row >
                <Col sm={6} lg={10} md={12} xl={10} xs={12} style={{ margin: '0 auto', padding: '15px' }}>
                  <Row>
                    <Col sm={6} lg={6} md={6} xl={6} xs={6}>
                      <div className="bgText">
                        <h3>
                          A job search tailored for you
                </h3>
                        <p>LRJ helps millions of people find great jobs and love what they do every day.</p>
                        <Button variant="primary">Find Out</Button>
                      </div>
                    </Col>
                    <Col className="content-bg" sm={6} lg={6} md={6} xl={6} xs={6}>
                      <div className="bgImage">
                        <img className='img-responsive' src={require('./../data/img/job.png')} alt='lrj job' />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>

          </Row>

        </Col>
      </React.Fragment>
    );
  }
}

export default Landing;