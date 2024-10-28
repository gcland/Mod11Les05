import { Link, NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

function NavigationBar() {
    return (
        <Navbar bg="warning" expand="lg">
            <Navbar.Brand href="/" >Marvel Characters App</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav" >
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/"activeclassname="active">
                        Home
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/characters-browse"activeclassname="active">
                        Browse Characters
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/character-detail/:id"activeclassname="active">
                        Character Detail
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/comics"activeclassname="active">
                        Comics
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        // <nav className="navBar">
        //     <NavLink to='/' activeClassName="active">Home</NavLink>
        //     <NavLink to='/characters-browse' activeClassName="active">Browse Characters</NavLink>
        //     <NavLink to='/character-detail/:id' activeClassName="active">Character Detail</NavLink>
        //     <NavLink to='/comics' activeClassName="active">Comics</NavLink>
        // </nav>
    )
}

export default NavigationBar