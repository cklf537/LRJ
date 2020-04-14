import React, { Component } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";

class Projects extends Component {
    state = {
        projects: []
    }

    componentDidMount() {
        console.log(this.props)
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    projects: res.data.slice(0, 10)
                })
            })
    }
    render() {
        const { projects } = this.state;
        const postList = projects.length ? (
            projects.map(post => {
                return (
                    <div className="card" key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </div>
                );
            })
        ) : (
                <Spinner animation="border" variant="primary" />
            )

        return (
            <React.Fragment>
                <h1>Projects</h1>
                 {postList}
            </React.Fragment>
           
        );
    }
}

export default Projects;