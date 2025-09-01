import './Navbar.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar( {setPageTitle} ){
    const [sidebarIsOpen, setSidebarOpen] = useState(false);
    const handleSidebarToggle = () => setSidebarOpen(prev => !prev);
    const sidebarIcon = sidebarIsOpen ? <FaTimes /> : <FaBars />;

    return(
        <>
        <div className="sidebar-wrapper"> {/* mobile compatability*/}
                    <div className={`sidebar-container ${sidebarIsOpen ? 'sidebar-open' : ''}`}>
                        <div className="sidebar-links">
                            <Link className="Link" to="/about" onClick={() => setPageTitle("About")}><p className="link-bars">About</p></Link>
                            <Link className="Link" to="/contact" onClick={() => setPageTitle("Contact")}><p className="link-bars">Contact</p></Link>
                            <Link className="Link" to="/courses" onClick={() => setPageTitle("Courses")}><p className="link-bars">Courses</p></Link>                        
                            <Link className="Link" to="/donations" onClick={() => setPageTitle("Donations")}><p className="link-bars">Donations</p></Link>
                        </div>
                    </div>
                </div>

            <div className="navbar-container">
                <h1 onClick={handleSidebarToggle} className="sidebar-toggle">{sidebarIcon}</h1>
                <div className="navbar-left">
                    <Link to="/" onClick={() => setPageTitle("Home")} className="navbar-title"><h1><span className="navbar-title-emp-left">next</span> <span className="navbar-title-emp-right">Horizon</span></h1></Link>
                </div>
                <div className="navbar-right">
                    <div className="navbar-links"> 
                        <Link className="Link" to="/about" onClick={() => setPageTitle("About")}><p>About</p></Link>
                        <Link className="Link" to="/contact" onClick={() => setPageTitle("Contact")}><p>Contact</p></Link>
                        <Link className="Link" to="/courses" onClick={() => setPageTitle("Courses")}><p>Courses</p></Link>
                        <Link className="Link" to="/donations" onClick={() => setPageTitle("Donations")}><p>Donations</p></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;