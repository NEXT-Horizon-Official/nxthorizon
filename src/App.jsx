import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses';
import Mission from './Pages/Mission/Mission'
import ErrorPage from './Pages/Error/ErrorPage/ErrorPage';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';

function AppContent(){
  const initialTitle = () => {
    const path = window.location.pathname.slice(1);
    if (path === "") return "Home";
    return path.charAt(0).toUpperCase() + path.slice(1);
  };
  const [pageTitle, setPageTitle] = useState(initialTitle);
  const location = useLocation();
  useEffect(() =>{
      const path = location.pathname.slice(1);
      const validPaths = ["", "courses", "mission", "contact", "donations"]; 
      if (path === "") {
        setPageTitle("Home");
      } 
      else if (validPaths.includes(path)) {
        setPageTitle(path.charAt(0).toUpperCase() + path.slice(1));
      } 
      else {
        setPageTitle("Error 404 - Page Not Found");
      }
  }, [location])
  useEffect(() =>{
      document.title = "Next Horizon - " + pageTitle;
  }, [pageTitle])
  return(
    <>
    <Navbar setPageTitle={setPageTitle}/>
    <div className="spacer">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="*" element={<ErrorPage setPageTitle={setPageTitle}/>} />
      </Routes>
    </div>
    </>
  )
}

function App() {
  return (
    <>
      <Router>
        <AppContent />
      </Router>
    </>
  )
}

export default App;
