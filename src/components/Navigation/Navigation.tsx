import { Container, Navbar, Nav } from "react-bootstrap";

const Navigation = () => (
  <Navbar>
    <Container fluid>
      <Nav>
        <Nav.Item>
          <Navbar.Brand>Instagram</Navbar.Brand>
        </Nav.Item>
      </Nav>
    </Container>
  </Navbar>
);

export default Navigation;
