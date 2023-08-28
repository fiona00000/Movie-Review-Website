import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons"
import Container from "react-bootstrap/Container"
import Nav from 'react-bootstrap/Nav'
import Navbar from "react-bootstrap/Navbar"
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" style={{ "color": 'gold' }}>
                    <FontAwesomeIcon icon={faVideoSlash} />Demo Review
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/WatchList">Watch List</NavLink>
                        <NavLink className="nav-link" to="/About">About</NavLink>
                    </Nav>
                    <NavLink className="btn btn-outline-info me-2" to="/Login">Login</NavLink>
                    <NavLink className="btn btn-outline-info me-2" to="/Register">Register</NavLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header