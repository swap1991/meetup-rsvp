import { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Form className="registration-form shadow rounded">
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="input" placeholder="Enter name" />
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col}  controlId="formBasicAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Enter age" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formBasicDob">
                        <Form.Label>Date of birth</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formBasicProfession">
                        <Form.Label>Profession</Form.Label>
                        <Form.Control type="input" placeholder="Enter profession" /> 
                    </Form.Group>
                    <Form.Group as={Col} controlId="formBasicLocality">
                        <Form.Label>Locality</Form.Label>
                        <Form.Control type="input" placeholder="Enter locality" />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicGuests">
                    <Form.Label>Number of guests</Form.Label>
                    <Form.Control type="number" placeholder="Enter number of guests" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter address" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default Registration;