import './ErrorPage.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';

function ErrorPage( {setPageTitle} ){
    useEffect(() => {
        setPageTitle("Error 404 - Page Not Found")
    }, [setPageTitle])
    return(
    <>
    <div className="error-container">
        <h1>Sorry! The Page That You Are Looking For Does Not Exist!</h1>
        <Link className="Link" to="/"><button>To Home Page</button></Link>
    </div>
    </>
    )
}
export default ErrorPage;