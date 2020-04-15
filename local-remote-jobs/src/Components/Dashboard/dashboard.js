import React, { Component } from 'react';
import Navigation from "./routing/navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Col } from "react-bootstrap";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";
import Post from "./post";

class dashBoard extends Component {
    state = {
        nav: [
            { title: 'Jobs', icon: 'work', component: Projects, path:'jobs' },
            { title: 'Projects', icon: 'note', component: Projects, path:'projects' },
            { title: 'Earnings', icon: 'attach_money', component: Contact, path:'earnings' },
            { title: 'Favorite', icon: 'favorite', component: About, path:'favorites' }
        ]
    }
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Col lg={2} md={2} sm={1} xs={1} className=" pt-3 pr-0 nav-border-color">
                        <Navigation nav={this.state} />
                    </Col>
                    <Col xs={11} sm={11} md={10} lg={10} xl={10} className=" pt-3">
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
