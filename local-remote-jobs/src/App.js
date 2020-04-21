// import { Header } from './Components/archive/topHeader'
// import { RightHeader } from './Components/archive/rightHeader';
// import { UserProfile } from './Components/archive/UserProfile'; 

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import {Container, Row, Col } from 'react-bootstrap';
import { data } from './data/app-data';
import Header from "./Components/header";
import Footer from "./Components/footer";
// import Dashboard from "./Components/dashboard";
import Register from "./Components/register";
import Landing from "./Components/landing";
import Login from "./Components/login/login";
import dashBoard from "./Components/Dashboard/dashboard";
import { connect } from "react-redux";
import './app.css';
 

class App extends Component {
  render(){
    const {header, footer } = this.props;
  return (
      <Container className='global-class' fluid >
        <BrowserRouter>
        <Row>
          <Col className='ljr-header-outer' ></Col>
          <Col sm={6} lg={10} md={12} xl={10} xs={12} className='pl-0 pr-0 ljr-headder-inner'>
            <Header hdata={header} />
          </Col>
          <Col className='ljr-header-outer'></Col>
        </Row>
        <Row className="lrj-content-inner">
          <Col className=''></Col>
          <Col sm={6} lg={10} md={12} xl={10} xs={12} className="" >
            <Row>
              <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
                <Route path='/dashboard' component={dashBoard} />
            </Switch>
            </Row>
          </Col>
          <Col className='testClass'></Col>
        </Row>
        <Row className='border-top'>
        <Col></Col>
          <Col sm={6} lg={10} md={12} xl={10} xs={12} className="">
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

const mapDispatchToProps = ()=>{
  return;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
