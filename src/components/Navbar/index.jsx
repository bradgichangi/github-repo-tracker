import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return(
        <nav>
            <NavLink className="home-link" to="/:user">Dashboard</NavLink>
            <NavLink  to="/">Switch User</NavLink>
        </nav>
    )
}

export default Navbar