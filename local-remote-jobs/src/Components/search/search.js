import React, { Component } from "react";
import { Card, Form, Button, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import TagSearch from './tagsearch';
import './search.css'

class Search extends Component {
    render() {
        let { data } = this.props;
        return (
            <Row>
                <Col className="search pt-2 pb-2">
                    <h5>Total job listings : 100280</h5>
                    <InputGroup className="mb-1" >
                        <FormControl
                            placeholder="Search local Romote / Freelance / Contract jobs..."
                            aria-label="Search local Romote / Freelance / Contract jobs..."
                            aria-describedby="Global Search Box"
                            xs={8}
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <div>
                        <TagSearch tags={data} />
                    </div>
                </Col>
            </Row>
        );
    }

}

export default Search;