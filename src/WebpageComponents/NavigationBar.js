
import '../App.css';
import React, { useState, Component, useEffect, createContext, useContext } from 'react';
import logo from '../Images/newHeaderLogo.jpg'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const NavigationBar = () => {







    return (


        <div className="App">

            <Navbar bg="primary" variant="dark">
                <Container>
                    <Nav defaultActiveKey="/Home" className="me-auto" >
                        <NavLink className="NavBarLinks" to="/Home">Home</NavLink>
                        <NavLink className="NavBarLinks" to="/Projects">Projects</NavLink>
                        <NavLink className="NavBarLinks" to="/Projects">Projects</NavLink>
                    </Nav>
                </Container>
            </Navbar>
      

        </div>




    );








}
export default NavigationBar;

