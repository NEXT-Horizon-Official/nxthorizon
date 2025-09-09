import './Navbar.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar( {setPageTitle} ){
    const [sidebarIsOpen, setSidebarOpen] = useState(false);
    const handleSidebarToggle = () => setSidebarOpen(prev => !prev);
    const handleLinkClick = (title) =>{
        setPageTitle(title)
        setSidebarOpen(false);
    }

    useEffect(() => {
        document.body.style.overflow = sidebarIsOpen ? "hidden" : "auto";
    }, [sidebarIsOpen]);

    useEffect(() =>{
        const handleResize = () => {
            if(window.matchMedia("(max-width: 1100px)").matches){
                setSidebarOpen(false);
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    const navLinks = [
        { path: "/about", title: "About"},
        { path: "/contact", title: "Contact"},
        { path: "/courses", title: "Courses"},
        { path: "/donations", title: "Donations"},
    ]

    const sidebarIcon = sidebarIsOpen ? <FaTimes /> : <FaBars />;

    return(
        <>
        <div className="sidebar-wrapper"> {/* mobile compatability*/}
                    <div className={`sidebar-container ${sidebarIsOpen ? 'sidebar-open' : ''}`}>
                        <div className="sidebar-links">
                            <Link className='Link link-bars' to="/" onClick={() => {
                                setPageTitle("home"); 
                                setSidebarOpen(false);
                                }}>
                                    <p>Home</p>
                            </Link>
                            {navLinks.map(({ path, title }) => (
                                <Link key={title} className="Link link-bars" to={path} onClick={() => handleLinkClick(title)}>
                                <p>{title}</p>
                                </Link>
                        ))}
                        </div>
                    </div>
                </div>

            <div className="navbar-container">
                <button onClick={handleSidebarToggle} className="sidebar-toggle">{sidebarIcon}</button> 
                <div className="navbar-left">
                    <Link to="/" onClick={() => handleLinkClick(title)} className="navbar-title"><h1><span className="navbar-title-emp-left">next</span> <span className="navbar-title-emp-right">Horizon</span></h1></Link>
                </div>
                <div className="navbar-right">
                    <div className="navbar-links"> 
                    {navLinks.map(({path, title}) => (
                        <Link key={title} className="Link" to={path} onClick={() => setPageTitle({title})}>
                        <p>{title}</p>
                        </Link>
                    ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;