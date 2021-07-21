import { useForm } from "react-hook-form";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";

export default function Registration() {
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
            .then(res => console.log(res));
    }
    return (
        <div>
            <h2 className="text-light text-center mt-5">Registration Form</h2>
            <Form className="registration-form shadow rounded" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="input" placeholder="Enter name" maxLength="50" {...register("name", { required: true })} />
                    {errors.name?.type === 'required' && <small className="text-danger">Name is required</small>}
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formBasicAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Enter age" {...register("age", { required: true, min: 13, max: 99 })} />
                        {errors.age?.type === 'required' && <small className="text-danger">Age is required</small>}
                        {errors.age?.type === 'min' && <small className="text-danger">Age cannot be less than 13</small>}
                        {errors.age?.type === 'max' && <small className="text-danger">Age cannot be greater than 99</small>}
                    </Form.Group>
                    <Form.Group as={Col} controlId="formBasicDob">
                        <Form.Label>Date of birth</Form.Label>
                        <Form.Control type="date"  {...register("dob", { required: true })} />
                        {errors.dob?.type === 'required' && <small className="text-danger">Date of birth is required</small>}
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formBasicProfession">
                        <Form.Label>Profession</Form.Label>
                        <Form.Select defaultValue="" {...register("profession", { required: true })}>
                            <option hidden value="">Select profession</option>
                            <option value="Employee">Employee</option>
                            <option value="Student">Student</option>
                        </Form.Select>
                        {errors.profession?.type === 'required' && <small className="text-danger">Profession is required</small>}
                    </Form.Group>
                    <Form.Group as={Col} controlId="formBasicLocality">
                        <Form.Label>Locality</Form.Label>
                        <Form.Control type="input" placeholder="Enter locality" maxLength="20" {...register("locality", { required: true })} />
                        {errors.locality?.type === 'required' && <small className="text-danger">Locality is required</small>}
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicGuests">
                    <Form.Label>Number of guests</Form.Label>
                    <InputGroup className="mb-3" {...register("noOfGuests", { required: true })}>
                        <Form.Check inline label="0" name="noOfGuests" type="radio" id="inline-radio-1" value="0" />
                        <Form.Check inline label="1" name="noOfGuests" type="radio" id="inline-radio-2" value="1" />
                        <Form.Check inline label="2" name="noOfGuests" type="radio" id="inline-radio-3" value="2" />
                    </InputGroup>
                    {errors.noOfGuests?.type === 'required' && <small className="text-danger">Number of guests is required</small>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter address (upto 50 characters)" maxLength="50" style={{ resize: "none" }}  {...register("address", { required: true })} />
                    {errors.address?.type === 'required' && <small className="text-danger">Address is required</small>}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}