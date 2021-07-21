import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">Meetup RSVP</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/">Registration</Link>
                    <Link to="/registeredUsers">Registered Users</Link>
                    <Link to="/reports">Reports</Link>
                </Nav>
            </Container>
        </Navbar>
    );
}