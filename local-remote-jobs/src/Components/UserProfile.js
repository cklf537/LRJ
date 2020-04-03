import React, { Component } from "react";
import {Row, Col, Card, InputGroup, FormControl, Button, } from "react-bootstrap";
import './UserProfile.css';

class UserProfile extends Component{
    render(){
        return(
            <React.Fragment>
            <Row className='pb-2 pt-2'>
                <Col className='text-center '>
                    <h2 className='banner-text'>Find your local remote job now.</h2>
                </Col>
            </Row>
            <Row className='pb-2 pt-2'>
                <Col className='' xs={2}></Col>
                <Col>
                <InputGroup className="mb-3 " >
                            <FormControl
                            placeholder="search..."
                            aria-label="search..."
                            aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                            <Button variant="primary search-primary">Search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                </Col>
                <Col xs={2}></Col>
            </Row>
            <Row className='pb-2 pt-2'>
                <Col className='text-center '>
                    <Card >
                        {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    <Card >
                        {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                </Col>
                
            </Row>
            </React.Fragment>
            // <Card style={{ width: '18rem' }}>
            // <Card.Body>
            //     <Row>
            //         <Col xs={3} className=''><span class="material-icons md-48">account_circle</span></Col>
            //         <Col className='user-profile'>
            //             <Card.Title className='profile-title'>
            //                 Chandrashekar Boggavarpu
            //             </Card.Title>
            //             <Card.Subtitle className="mb-2 text-muted">Fullstack Developer</Card.Subtitle>
            //             <Card.Subtitle className="mb-2 text-muted"><span class="material-icons icon-status">fiber_manual_record</span> Active</Card.Subtitle>
            //         </Col>
            //     </Row>
            // </Card.Body>
            // </Card>
        );
    }
}

export {UserProfile}