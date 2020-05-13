import React, { Component } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link, NavLink } from "react-dom";
import { connect } from "react-redux";
import { postJobAction } from "../../store/Actions/postJobActions";
import JobForm from "./jobform";

class PostJobs extends Component {
    
    state = {...this.props.formData};

    handelChange = (e) => {
        console.log("handelChange", e.target.value);
        e.target.id !== "" ?
            this.setState({
                ...this.state,
                [e.target.id]: e.target.value
            }) :
            this.setState({
                ...this.state,
                [e.target.name]: e.target.value
            })
    }
    handelSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.postJob(this.state);
    }

    render() {
        console.log(this.props);
        return (
            <JobForm handelChange={this.handelChange} handelSubmit={this.handelSubmit} args={this.props} />
        );
    }
}

const mapdispatchToProps = (dispatch) => {
    return {
        postJob: (jobPost) => dispatch(postJobAction(jobPost))
    }
}

const mapStateToProps = (state) => {
    return state.job;
}

export default connect(mapStateToProps, mapdispatchToProps)(PostJobs);