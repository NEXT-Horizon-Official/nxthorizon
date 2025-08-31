import './Navbar.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Navbar( {setPageTitle} ){
    return(
        <>
            <div className="navbar-container">
                <div className="navbar-left">
                    <Link to="/" onClick={() => setPageTitle("Home")} className="navbar-title"><h1><span className="navbar-title-emp-left">next</span> <span className="navbar-title-emp-right">Horizons</span></h1></Link>
                </div>
                <div className="navbar-right">
                    <div className="navbar-links"> 
                        <Link to="/about" onClick={() => setPageTitle("About")}><a>About</a></Link>
                        <Link to="/contact" onClick={() => setPageTitle("Contact")}><a>Contact</a></Link>
                        <Link to="/courses" onClick={() => setPageTitle("Courses")}><a>Courses</a></Link>
                        <Link to="/donations" onClick={() => setPageTitle("Donations")}><a>Donations</a></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;