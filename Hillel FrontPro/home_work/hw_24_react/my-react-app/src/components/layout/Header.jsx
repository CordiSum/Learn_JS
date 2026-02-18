import { Navbar, Nav, Container } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar bg="dark" expand="lg" className="border-bottom">
      <Container>
        <Navbar.Brand href="#">SWAPI</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="#" className='link-light'>Home</Nav.Link>
            <Nav.Link href="#" className='link-light'>About</Nav.Link>
            <Nav.Link href="#" className='link-light'>Documentation</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
