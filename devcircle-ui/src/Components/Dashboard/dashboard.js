import React, { Component } from 'react';
import Navigation from "./routing/navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Col } from "react-bootstrap";
import Jobs from "./jobs";
import Projects from "./projects";
import Earnings from "./earnings";
import DashboardHome from './dashboardHome';
import Favorites from './favorites';
import Post from "./post";

class Dashboard extends Component {
    state = {
        nav: [
            { title: 'Dashboard', icon: 'web', component: DashboardHome, path:'dashboard' },
            { title: 'Jobs', icon: 'work_outline', component: Jobs, path:'jobs' },
            { title: 'Projects', icon: 'note', component: Projects, path:'projects' },
            { title: 'Earnings', icon: 'attach_money', component: Earnings, path:'earnings' },
            { title: 'Favorite', icon: 'favorite_border', component: Favorites, path:'favorites' }
        ]
    }
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Col lg={2} md={2} sm={1} xs={1} className=" pt-3 pr-0 nav-border-color ">
                        <Navigation nav={this.state} />
                    </Col>
                    <Col xs={11} sm={11} md={10} lg={10} xl={10} className=" pt-3">
                        <Switch>
                            <Route exact path='/dashboard' component={DashboardHome}  />
                            <Route path='/dashboard/jobs' component={Jobs} />
                            <Route path='/dashboard/projects' component={Projects} />
                            <Route path='/dashboard/earnings' component={Earnings} />
                            <Route path='/dashboard/:id' component={Post} />
                        </Switch>
                    </Col>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default Dashboard;
