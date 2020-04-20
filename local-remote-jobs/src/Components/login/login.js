import React from 'react';
import { Col, Row } from "react-bootstrap";
import { FormControl, FormGroup, Button } from 'react-bootstrap';
import './style.css';
import axios from 'axios';

const Login = props => {

    let email;
    let pass;
    const [errorInfo, setErrorInfo] = React.useState({
        errorMsg: '',
        error: false
    });
    const emailChange = (event) => {
        email = event.target.value;
    }
    const password = (event) => {
        pass = event.target.value;
    }
    const onSubmit = () => {
        if (email !== '' && pass === '') {
            setErrorInfo({
                errorMsg: 'Please Enter Password',
                error: true
            });
        }
        if (email === '' && pass !== '') {
            setErrorInfo({
                errorMsg: 'Please enter email ',
                error: true
            });
        }
        if (pass && email) {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then((res) => {
                    console.log(res);
                    if (res.data) {
                        res.data.filter(item => {
                            if (item.email === email && item.username === pass) {
                                props.history.push("/");
                                return <Redirect to='/dashboard' />
                            } else {
                                setErrorInfo({
                                    errorMsg: 'UserName and password invalid',
                                    error: true
                                });
                            }
                        })
                    }
                }).catch((err) => {
                    console.log(err);

                })
        }

    };
    return (
        <Col>
            <Row className="lrj-content-inner">
                <Col xl={12} xs={12} className="" >
                    <Row>
                        <div className="login" >
                            <h3>Sign In</h3>
                            <p>New to LRJ ? <a href='#' >Register Here</a></p>
                            {errorInfo.error && <span className="errorInfo">{errorInfo.errorMsg}</span>}
                            <form>
                                <FormGroup controlId="formControlsText">
                                    <FormControl type="email" className="inputs" placeholder="Email Address" onChange={($event) => { emailChange($event) }} />
                                    <FormControl type="Password" className="inputs" placeholder="Password" onChange={($event) => { password($event) }} />
                                    <Button type="button" className="signIn" onClick={onSubmit}>
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
    )
}

export default Login;