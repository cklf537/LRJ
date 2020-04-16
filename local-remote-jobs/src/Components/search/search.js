import React, { Component } from "react";
import { Card, Form, Button, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import './search.css'

class Search extends Component {
    render() {
        return (
            <Row>
                <Col className="search pt-2 pb-2">
                    <h5>Total job listings : 100280</h5>
                    <InputGroup className="mb-3" >
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
                </Col>
            </Row>
        );
    }

}

export default Search;