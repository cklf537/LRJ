import React, { Component } from 'react';
import { Col, Row } from "react-bootstrap";
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap';
import './style.css';
class Login extends Component {

    handleFormData = () => {
        console.log('log');
    };
    render() {
        return (
            <Col>
                <Row className="lrj-content-inner">
                    <Col xl={12} xs={12} className="" >
                        <Row>
                        <div className="login" >
                            <h3>Sign In</h3>
                            <p>New to LRJ ? <a href ='#' >Register Here</a></p>
                            <form>
                                <FormGroup controlId="formControlsText">
                                    <FormControl type="email" className="inputs" placeholder="Email Address" />
                                    <FormControl type="Password" className="inputs" placeholder="Password" />
                                <Button type="button" className='signIn'>
                                    Sign In
                                </Button>
                                </FormGroup>
                                <span> or </span>
                                <Button type="button" className='google'>
                                   signIn with  Google
                                </Button>
                                <Button type="button" className='facebook'>
                                    sign in with Facebook
                                </Button>
                            </form>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default Login;