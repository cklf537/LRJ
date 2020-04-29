import React, { Component } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link, NavLink } from "react-dom";
import { connect } from "react-redux";
import { postJobAction } from "../../store/Actions/postJobActions";

class PostJobs extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        title:'',
        description:''
    }
    handelChange = (e)=>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handelSubmit = (e)=>{
        e.preventDefault();
        this.props.postJob(this.state);
    }
    render() {
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
                    {this.props.loading && "hello"}
                </Form>
            </Col>
        );
    }
}

const mapdispatchToProps = (dispatch)=>{
    return{
        postJob: (jobPost)=>dispatch(postJobAction(jobPost))
    }
} 

const mapStateToProps = (state)=>{
   return state;
}

export default connect(mapStateToProps, mapdispatchToProps)(PostJobs);