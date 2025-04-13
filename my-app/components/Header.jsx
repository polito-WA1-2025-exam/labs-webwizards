import { Container, Navbar } from 'react-bootstrap'
import { Button } from "react-bootstrap"

function Header(props) {

    return (
        <Container fluid>
            <Navbar bg="primary" variant="dark" className="navbar bg-primary text-white d-flex justify-content-between align-items-center">
                <h1 className="ms-3 text-white">Meme Game</h1>
                <div className="me-3">
                    <Button variant="light" className="me-2">Login</Button>
                    <Button variant="outline-light">Register</Button>
                </div>
            </Navbar>
        </Container>
    );
}

export default Header