import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import AboutUs from './components/pages/AboutUs';
import Contact from './components/pages/Contact';
import Dashboard from './components/pages/Dashboard';
import Register from './components/pages/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/about us' Component={AboutUs}/>
          <Route path='/contact' Component={Contact}/>
          <Route path='/login' Component={Login}/>
          <Route path='/dashboard' Component={Dashboard}/>
          <Route path='/register' Component={Register}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
