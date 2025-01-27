import React from 'react';
import { Link } from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;


function NavigationBar() {
  return(
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          React-bootstrap
        </Navbar.Brand>
        <Navbar.Toggle area-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="ml-auto">

            <Nav.Item>
             <Nav.Link>
               <Link to="/">Home</Link>
             </Nav.Link>
           </Nav.Item>
           <Nav.Item>
             <Nav.Link>
               <Link to="/about">About</Link>
             </Nav.Link>
           </Nav.Item>
           <Nav.Item>
             <Nav.Link>
               <Link to="/contact">Contact</Link>
             </Nav.Link>
           </Nav.Item>

        </Nav>
      </Navbar.Collapse>
      </Navbar>
    </Styles>
  );


}

export default NavigationBar;
