import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CreateButton from './ModalButtons';


function Menu() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="/cost.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Finance Application"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='me-auto'>
                        <NavDropdown title="Accounts" id='basic-nav-dropdown'>
                            <NavDropdown.Item><CreateButton name={'Add Account'} /></NavDropdown.Item>
                            <NavDropdown.Item><CreateButton name={'Remove Account'} /></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Income" id='basic-nav-dropdown'>
                            <NavDropdown.Item><CreateButton name={'Add Income'} /></NavDropdown.Item>
                            <NavDropdown.Item><CreateButton name={'Remove Income'} /></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}



export default Menu;