import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
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
      if (path === "") setPageTitle("Home");
      else setPageTitle(path.charAt(0).toUpperCase() + path.slice(1));
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
