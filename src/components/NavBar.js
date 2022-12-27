import CartWidget from "./CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
// import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container className="navbar-container">

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav id="navbar">
                            <Navbar.Brand><Link className="nav-brand" to="/" >Lil Shop</Link></Navbar.Brand>
                            <Nav className="mx-auto">
                            <Link className="nav-link mx-2" to="/category/auriculares" >Auriculares</Link>
                            <Link className="nav-link mx-2" to="/category/mouse" >Mouse</Link>
                            <Link className="nav-link mx-2" to="/category/teclados" >Teclados</Link>
                            <Link className="nav-link mx-2" to="/category/gamepads" >Gamepads</Link>
                            </Nav>
                            <Link to="/cart" href="#cart" className="mx-4"><CartWidget /></Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default NavBar;