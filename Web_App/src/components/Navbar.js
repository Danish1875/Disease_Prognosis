import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

  useEffect(() => {
    showButton()

  }, [])

  window.addEventListener('resize', showButton);



  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {/* <img src='https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0'/> */}
            <h4>Diagnosio <i className='fab fa-typo3'></i></h4>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about us' className='nav-links' onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                Login/Register
              </Link>
            </li>
          </ul>
          <div className="btn-container">
            {button && <Button className='login-btn'>Login/Register</Button>}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar