import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar(){
    return (
        <nav className="navBarList">
            <NavLink className="navItem" exact to="/">Home</NavLink>
            <NavLink className="navItem" to="/voters">View Registered Voters</NavLink>
            <NavLink className="navItem" to="/registrationform">Register Now</NavLink>
            <NavLink className="navItem" to="/candidates">Who's On The Ballot?</NavLink>
        </nav>
)}

export default NavBar; 