import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import {Container, Row, Col } from 'react-bootstrap';
// import Header from "./Components/header";
import Footer from "./Components/footer";
import Register from "./Components/register";
import Landing from "./Components/landing";
import Login from "./Components/login/login";
import dashBoard from "./Components/Dashboard/dashboard";
import { connect } from "react-redux";
import './app.css';
import PostJobs from './Components/forms/postJobs';
// import Container from '@material-ui/core/Container';
import Header from './Components/header/header'

class App extends Component {
  render(){
    const {header, footer } = this.props.landing;
  return (
    // <Container maxWidth="xl">
    //   <Header />
    // </Container>
      <Container className='global-class' fluid >
        <BrowserRouter>
        <Row>
          <Col sm={6} lg={12} md={12} xl={12} xs={12} className='pl-0 pr-0 ljr-headder-inner'>
            <Header hdata={header} />
          </Col>
          <Col className='ljr-header-outer'></Col>
        </Row>
        <Row className="lrj-content-inner">
          <Col sm={6} lg={12} md={12} xl={12} xs={12} className="" >
            <Row>
              <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
                <Route path='/dashboard' component={dashBoard} />
                <Route path='/postjob' component={PostJobs} />
            </Switch>
            </Row>
          </Col>
        </Row>
        <Row className='border-top'>
        <Col></Col>
          <Col sm={6} lg={12} md={12} xl={12} xs={12} className="">
            <Footer fdate={footer} />
          </Col>
          <Col className=''></Col>
        </Row>
        </BrowserRouter>
      </Container>
    );
  } 
}

const mapStateToProps = (state)=>{
  return({
    ...state
  })

}

export default connect(mapStateToProps, null)(App);
