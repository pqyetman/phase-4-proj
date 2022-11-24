import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useHistory } from "react-router-dom";


function NavBar({updateUser, currentUser}) {

    const history = useHistory()

    function logOut() {
        console.log(currentUser)

        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                updateUser(null);
            }
            history.push("/")
        });
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="/home">Projects</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href= "/r-customers">Customers</Nav.Link>
                            <Nav.Link href="/r-employees">Employees</Nav.Link>
                            <Nav.Link eventKey="disabled" disabled >Calendar</Nav.Link>
                            <NavDropdown title="Create New" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Customer</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Project
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Employee
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button onClick={logOut} style={{ contentAlign: "right" }} variant="outline-success">Log Out</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
}

export default NavBar;