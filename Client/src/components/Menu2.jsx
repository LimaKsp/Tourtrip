import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'


function Meenu() {

    return (<Navbar    collapseOnSelect
        expand="md"
        bg="blueviolet"
        variant="dark"
        fixed="top" >
        <Container>
            <Nav.Item> <img src=".\src\img\aviao.png" className='icon'></img></Nav.Item>
            <LinkContainer to="/">
                <Navbar.Brand>TourTrip</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/sobre">
                        <Nav.Link>Sobre</Nav.Link>
                    </LinkContainer>
                                <LinkContainer to="/Destinos">
                        <Nav.Link>Destinos</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/funcionalidades">
                        <Nav.Link>Minhas Viagens</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contato">
                        <Nav.Link>Contato</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav expand="md" className="ms-auto">
            <Nav.Link>
            <LinkContainer to="/">
                <Button variant="btn btn-success">
              UserTest
              </Button>
                        </LinkContainer>
                        </Nav.Link>
                    <Nav.Link>
                    <LinkContainer to="/login">
                        <Button variant="btn btn-danger">
                            SAIR
                            </Button>
                        </LinkContainer>
                        </Nav.Link>
          </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}

export default Meenu;

