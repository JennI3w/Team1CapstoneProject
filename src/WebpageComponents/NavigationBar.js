
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
                        <NavLink className="NavBarLinks" to="/About">About Us</NavLink>
                        <NavLink className="NavBarLinks" to="/Camps">Camps</NavLink>
                        <NavLink className="NavBarLinks" to="/Competitions">Competitions</NavLink>
                        <NavLink className="NavBarLinks" to="/Gallery">Gallery</NavLink>
                        <NavLink className="NavBarLinks" to="/Links">Links</NavLink>
                        <NavLink className="NavBarLinks" to="/Contact">Contact us</NavLink>
                    </Nav>
                </Container>
            </Navbar>
      

        </div>




    );








}
export default NavigationBar;

