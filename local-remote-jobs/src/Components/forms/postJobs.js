import React, { Component } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link, NavLink } from "react-dom";
import { connect } from "react-redux";

class PostJobs extends Component {
    constructor(props) {
        super(props)
        console.log("post Jobs", this.props);
    }
    state = {
        jobListing:{
            title: '',
            description:''
        }
    }
    handelChange = (e)=>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handelSubmit = (e)=>{
        e.preventDefault();
        console.log('state', this.state);
    }
    render() {
        const { jobListing } = this.state;
        return (
            <Col className="mt-3">
                <h3 className="pb-2">Post Requirement</h3>
                <Form onSubmit={this.handelSubmit}>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Job Title" onChange={this.handelChange} />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="3" onChange={this.handelChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Post</Button>
                </Form>
            </Col>
        );
    }
}

const mapdispatchToProps = (dispatch)=>{
    return{
        postJob: (jobListing)=>{dispatch(postJobActionControler(jobListing))}
    }
}

export default connect()(PostJobs);