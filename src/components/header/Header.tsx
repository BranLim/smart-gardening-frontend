import { Navbar, Nav } from "react-bootstrap";

const Header = () => (
  <Navbar bg="primary" variant="dark" expand="lg">
    <Navbar.Brand href="/">{" "}Smart Gardening</Navbar.Brand>
    <Navbar.Toggle></Navbar.Toggle>
    <Navbar.Collapse>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav>
    </Navbar.Collapse>    
  </Navbar>
);

export default Header;
