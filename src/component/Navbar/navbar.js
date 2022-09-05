import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="Brand-name"><h1>Substance</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/upload">Pridiction</Nav.Link>

            <NavDropdown title="Parse File" id="basic-nav-dropdown">
              <NavDropdown.Item href="/upload">Parse File</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/details">Apply</Nav.Link>
            <Nav.Link href="/">Output</Nav.Link>
            <Nav.Link href="/">Result</Nav.Link>
            <Nav.Link href="/">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;