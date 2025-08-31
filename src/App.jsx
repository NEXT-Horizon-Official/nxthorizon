import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
const [pageTitle, setPageTitle] = useState("Home");

useEffect(() =>{
    document.title = "Next Horizon - " + pageTitle;
}, [pageTitle])

  return (
    <>
      <Router>
        <Navbar setPageTitle={setPageTitle}/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      </>
  )
}

export default App;
