import React, { Component } from "react";
import axios from "axios";
import { Spinner, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class Projects extends Component {
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
                        <Card style={{ display: 'flex', flexDirection: 'row', flex: 1 }} key={project.id} className="mt-2 mb-2">
                            <Card.Body >
                                <img src={project.company_logo} alt={project.company} style={{ width: '10%' }} />
                                <Card.Title><Link to={`/dashboard/${project.id}`}>{project.company}</Link></Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{project.position}</Card.Subtitle>
                                <Card.Text>
                                    {project.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    );
                }
            })
        ) : (
                <Spinner animation="border" variant="primary" />
            )

        return (
            <React.Fragment>
                <h3>Projects</h3>
                {postList}
            </React.Fragment>
        );
    }
}

export default Projects;