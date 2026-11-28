import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HeaderLayout() {

    return (
        <>
            <Navbar>
                <Container>

                    <Navbar.Brand as={Link} to='/'>
                        MyWebsite
                    </Navbar.Brand>

                    <Nav>
                        <Nav.Link as={Link} to='/'>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to='/about'>
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/blog">
                            Blogs
                        </Nav.Link>

                        <Nav.Link as={Link} to="/contact">
                            Contact
                        </Nav.Link>
                    </Nav>

                </Container>
            </Navbar>
        </>
    )
}