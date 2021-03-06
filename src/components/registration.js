import { useForm } from "react-hook-form";
import { Form, Button, Row, Col, InputGroup, Alert } from "react-bootstrap";
import { useState } from "react";
import { Prompt } from "react-router-dom";

export default function Registration() {
    const [show, setShow] = useState(false);
    const [isBlocking, setIsBlocking] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('https://meetup-rsvp-api.free.beeceptor.com/api/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(res => {
                setShow(true);
                setIsBlocking(false);
            });
    }

    const handleChange = e => {
        setIsBlocking(e.target.value.length > 0);
    }

    return (
        <div>
            <h2 className="text-light text-center mt-5">Registration Form</h2>
            <Form className="registration-form shadow rounded" onSubmit={handleSubmit(onSubmit)}>
                <Prompt when={isBlocking} message={location => "Are you sure you want to leave this page?"} />
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="input" placeholder="Enter name" maxLength="50" 
                                {...register("name", { required: true })} onChange={handleChange} />
                    {errors.name?.type === 'required' && <small className="text-danger">Name is required</small>}
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formBasicAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Enter age"
                                    {...register("age", { required: true, min: 13, max: 99 })} onChange={handleChange}/>
                        {errors.age?.type === 'required' && <small className="text-danger">Age is required</small>}
                        {errors.age?.type === 'min' && <small className="text-danger">Age cannot be less than 13</small>}
                        {errors.age?.type === 'max' && <small className="text-danger">Age cannot be greater than 99</small>}
                    </Form.Group>
                    <Form.Group as={Col} controlId="formBasicDob">
                        <Form.Label>Date of birth</Form.Label>
                        <Form.Control type="date" {...register("dob", { required: true })} onChange={handleChange} />
                        {errors.dob?.type === 'required' && <small className="text-danger">Date of birth is required</small>}
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formBasicProfession">
                        <Form.Label>Profession</Form.Label>
                        <Form.Select defaultValue="" 
                                    {...register("profession", { required: true })} onChange={handleChange}>
                            <option value="">Select profession</option>
                            <option value="Employee">Employed</option>
                            <option value="Student">Student</option>
                        </Form.Select>
                        {errors.profession?.type === 'required' && <small className="text-danger">Profession is required</small>}
                    </Form.Group>
                    <Form.Group as={Col} controlId="formBasicLocality">
                        <Form.Label>Locality</Form.Label>
                        <Form.Control type="input" placeholder="Enter locality" maxLength="20" 
                                    {...register("locality", { required: true })} onChange={handleChange} />
                        {errors.locality?.type === 'required' && <small className="text-danger">Locality is required</small>}
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicGuests">
                    <Form.Label>Number of guests</Form.Label>
                    <InputGroup className="mb-3" {...register("noOfGuests", { required: true })}>
                        <Form.Check inline label="0" name="noOfGuests" type="radio" id="inline-radio-1" value="0" onChange={handleChange} />
                        <Form.Check inline label="1" name="noOfGuests" type="radio" id="inline-radio-2" value="1" onChange={handleChange} />
                        <Form.Check inline label="2" name="noOfGuests" type="radio" id="inline-radio-3" value="2" onChange={handleChange} />
                    </InputGroup>
                    {errors.noOfGuests?.type === 'required' && <small className="text-danger">Number of guests is required</small>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter address (upto 50 characters)" maxLength="50" style={{ resize: "none" }}
                                {...register("address", { required: true })} onChange={handleChange} />
                    {errors.address?.type === 'required' && <small className="text-danger">Address is required</small>}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                {
                    show &&
                    <Alert variant="success" className="mt-3" onClose={() => setShow(false)} dismissible>
                        Congratulations! You have been successfully registered.
                    </Alert>
                }
            </Form>
        </div>
    );
}