import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Components/HeaderTest.css';
import { useEffect } from 'react';


const Header = () => {
    
        const [menuOpen, setMenuOpen] = useState(false);
      
        const toggleMenu = () => {
          setMenuOpen(!menuOpen);
        };
        
        useEffect(() => {
          const handleScroll = () => {
            const header = document.querySelector('.header-area');
            if (window.scrollY > 0) {
              header.classList.add('scrolled');
            } else {
              header.classList.remove('scrolled');
            }
          };
        
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
        

  return (
    <div>
               <div className="sub-header">
    <div className="container">
      <div className="row">
 
        <div className="col-lg-4 col-sm-4">
          <div className="right-icons">
            <ul>
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-behance"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <Link href="/" className="logo">
                  Leki Academy
                </Link>
           
                <div className="menu-trigger" onClick={toggleMenu}>
                  <span>Menu</span>
                  <img src={menuOpen ? 'assets/images/close.png' : 'assets/images/open.png'} alt="Menu Icon"  />
                </div>
       
                <ul className={`nav ${menuOpen ? 'active' : ''}`} >
                <li className="scroll-to-section"><Link to="/" className="active">Home</Link></li>
                          <li><Link to="/meetings">Meetings</Link></li>
                          <li className="scroll-to-section"><a href="#apply">Apply Now</a></li>
                          <li className="has-sub">
                              <a href="#">Pages</a>
                              <ul className="sub-menu">
                                  <li><a href="meetings.html">Upcoming Meetings</a></li>
                                  <li><a href="meeting-details.html">Meeting Details</a></li>
                              </ul>
                          </li>
                          <li className="scroll-to-section"><a href="#courses">Courses</a></li> 
                          <li className="scroll-to-section"><a href="#contact">Contact Us</a></li> 
                </ul>
           
              </nav>
            </div>
          </div>
        </div>
      </header>


    </div>
  )
}

export default Header
