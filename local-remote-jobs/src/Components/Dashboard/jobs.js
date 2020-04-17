import React, { Component } from "react";
import axios from "axios";
import { Spinner, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Search from "../search/search";

class Jobs extends Component {
    state = {
        projects: [],
        tags: []
    }

    componentDidMount() {
        axios.get('https://remoteok.io/api?ref=producthunt')    
            .then(res => {
                let tagsCollection = [];
                res.data.map(item => {
                    return tagsCollection.push(item.tags);
                })
                let tags = new Set(tagsCollection.toString().split(','));
                this.setState({
                    projects: res.data.slice(0, 10),
                    tags
                })
            })
    }
    render() {
        const { projects, tags } = this.state;
        const postList = projects.length ? (    
            projects.map((project, index) => {
                if (index !== 0) {
                    return (
                        <Row className="ml-2 mr-2 mb-4">
                            <Col xs={2} className="p-2">
                                <img src={project.company_logo} alt={project.company} style={{ width: '50%' }} />
                            </Col>
                            <Col className="border-bottom p-2">
                                <Card.Title><Link to={`/dashboard/${project.id}`}>{project.company}</Link></Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{project.position}</Card.Subtitle>
                                <Card.Text>
                                    {project.description}
                                </Card.Text>
                            </Col>
                        </Row>
                    );
                }
            })
        ) : (
                <Spinner animation="border" variant="primary" />
            )

        return (
            <React.Fragment>
                <h3 className="pb-2">Jobs</h3>
                <Search />
                {postList}
            </React.Fragment>
        );
    }
}

export default Jobs;