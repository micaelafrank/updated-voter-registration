import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar(){
    return (
        <nav className="navBarList">
            <NavLink className="navItem" to="/">Home</NavLink>
            <NavLink className="navItem" to="/voters">View Registered Voters</NavLink>
            <NavLink className="navItem" to="/register">Register Now</NavLink>
            <NavLink className="navItem" to="/candidates">On The Ballot</NavLink>
        </nav>
)}

export default NavBar; 