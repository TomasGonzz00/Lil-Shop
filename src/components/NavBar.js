import CartWidget from "./CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container className="navbar-container">

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav id="navbar">
                            <Navbar.Brand href="#home" style={{ fontSize: 25 }}>Lil Shop</Navbar.Brand>
                            <Nav className="mx-auto">
                                <Nav.Link className="mx-2" href="#auriculares">Auriculares</Nav.Link>
                                <Nav.Link className="mx-2" href="#mouse">Mouse</Nav.Link>
                                <Nav.Link className="mx-2" href="#teclados">Teclados</Nav.Link>
                                <Nav.Link className="mx-2" href="#gamepads">Gamepads</Nav.Link>
                                <Nav.Link className="mx-2" href="#contact">Contacto</Nav.Link>
                            </Nav>
                            <Nav.Link href="#cart" className="mx-4"><CartWidget /></Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default NavBar;