import React from 'react';

import { NavLink } from 'react-router-dom';


const Navigation = () => {

    return (
        <div>
            <NavLink to="/Home">Home Page</NavLink><br></br>
            <NavLink to="/Projects">Projects</NavLink><br></br>
            <NavLink to="/School">School Assignments</NavLink><br></br>
        </div>
    );

}
// <NavLink to="/Contact">Contact</NavLink><br></br>
export default Navigation;