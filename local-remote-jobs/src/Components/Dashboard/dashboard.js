import React, { Component } from 'react';
import Navigation from "./routing/navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Col } from "react-bootstrap";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";
import Post from "./post";

class dashBoard extends Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Col lg={2} md={2} sm={2} xs={2} className="d-none d-xl-block d-md-block d-sm-block d-xs-block  pt-3" >
                        <Navigation />
                    </Col>
                    <Col xs={12} sm={12} md={10} lg={10} xl={10} className=" pt-3">
                    
                        <Switch>
                            <Route path='/dashboard/projects' component={Projects} />
                            <Route path='/dashboard/about' component={About} />
                            <Route path='/dashboard/contact' component={Contact} />
                            <Route path='/dashboard/:id' component={Post} />
                        </Switch>
                    </Col>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default dashBoard;