import React from 'react';
import { Navbar, Nav, Button, FormControl, Form } from 'react-bootstrap';
import img from '../img/fiec.png';

const NavBar = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/"><img src={img} width="80" height="50" /> </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/add">Adicionar</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
      </>
    );
};

export default NavBar;