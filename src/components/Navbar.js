import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Col, Button, Nav } from 'react-bootstrap'
import './Navbar.css';

function Navigationbar() {
    
    return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navbar-container">
        <Navbar.Brand href="#home">
            <img
            alt=""
            src="./images/logo.png"
            className="d-inline-block align-top img-logo"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
     
    </Nav>
    <Nav>
    <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link txt-menu" to="#">Beranda</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link txt-menu" to="#">Berita</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link txt-menu" to="#">Pengumuman</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link txt-menu" to="#">Tentang Kami</Link>
                </li>
                <li className="nav-item">
                    <Button className="btn btn-login btn-primary ">Login</Button>
                </li>
            </ul>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>
    )
}

export default Navigationbar
