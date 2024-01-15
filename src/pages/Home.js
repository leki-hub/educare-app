import React from 'react';
import { Link } from 'react-router-dom';
import '../Components/Header.css';
import CountUpAnimation from '../Components/Countup.js';
import ServiceCarousel from '../Components/ServiceCarousel.jsx'
import HomeAccordion from '../Components/HomeAccordion.jsx';
import CourseCarousel from '../Components/CourseCarousel.js';
import ContactForm from '../Components/ContactForm.js';


const currentYear = new Date().getFullYear();
const Home = () => {


      return (
       <div>
        <section className="section main-banner" id="top" data-section="section1">
          <video autoPlay muted loop id="bg-video">
           <source src="assets/images/course-video.mp4" type="video/mp4" />
          </video>

          <div className="video-overlay header-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="caption">
              <h6>Hello Students</h6>
              <h2>Welcome to Education</h2>
              <p>This is an edu meeting HTML CSS template provided by <a href="/" >Emmanuel</a>. This is a Bootstrap v5.1.3 layout. The video background is taken from Pexels website, a group of young people by <a href="/" >Pressmaster</a>.</p>
              <div className="main-button-red">
                  <div className="scroll-to-section"><a href="#contact">Join Us Now!</a></div>
              </div>
          </div>
              </div>
            </div>
          </div>
      </div>
  </section>
  <ServiceCarousel />
   
  <section className="upcoming-meetings" id="meetings">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading">
            <h2>Upcoming Meetings</h2>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="categories">
            <h4>Meeting Catgories</h4>
            <ul>
              <li><a href="/">Sed tempus enim leo</a></li>
              <li><a href="/">Aenean molestie quis</a></li>
              <li><a href="/">Cras et metus vestibulum</a></li>
              <li><a href="/">Nam et condimentum</a></li>
              <li><a href="/">Phasellus nec sapien</a></li>
            </ul>
            <div className="main-button-red">
              <Link to ="/meetings">All Upcoming Meetings</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-6">
              <div className="meeting-item">
                <div className="thumb">
                  <div className="price">
                    <span>$22.00</span>
                  </div>
                  <Link to ="/meeting-details"><img src="assets/images/meeting-1.jpg" alt="New Lecturer Meeting" /></Link>
                </div>
                <div className="down-content">
                  <div className="date">
                    <h6>Nov <span>10</span></h6>
                  </div>
                  <a href="meeting-details.html"><h4>New Lecturers Meeting</h4></a>
                  <p>Morbi in libero blandit lectus<br />cursus ullamcorper.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="meeting-item">
                <div className="thumb">
                  <div className="price">
                    <span>$36.00</span>
                  </div>
                  <Link to ="/meeting-details"><img src="assets/images/meeting-2.jpg" alt="Online Teaching" /></Link>
                </div>
                <div className="down-content">
                  <div className="date">
                    <h6>Nov <span>24</span></h6>
                  </div>
                  <Link to ="/meeting-details"><h4>Online Teaching Techniques</h4></Link>
                  <p>Morbi in libero blandit lectus<br />cursus ullamcorper.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="meeting-item">
                <div className="thumb">
                  <div className="price">
                    <span>$14.00</span>
                  </div>
                  <Link to ="/meeting-details"><img src="assets/images/meeting-3.jpg" alt="Higher Education" /></Link>
                </div>
                <div className="down-content">
                  <div className="date">
                    <h6>Nov <span>26</span></h6>
                  </div>
                  <Link to ="/meeting-details"><h4>Higher Education Conference</h4></Link>
                  <p>Morbi in libero blandit lectus<br />cursus ullamcorper.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="meeting-item">
                <div className="thumb">
                  <div className="price">
                    <span>$48.00</span>
                  </div>
                  <Link to ="/meeting-details"><img src="assets/images/meeting-4.jpg" alt="Student Training" /></Link>
                </div>
                <div className="down-content">
                  <div className="date">
                    <h6>Nov <span>30</span></h6>
                  </div>
                  <Link to ="/meeting-details"><h4>Student Training Meetup</h4></Link>
                  <p>Morbi in libero blandit lectus<br />cursus ullamcorper.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="apply-now" id="apply">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 align-self-center">
          <div className="row">
            <div className="col-lg-12">
              <div className="item">
                <h3>APPLY FOR BACHELOR DEGREE</h3>
                <p>You are allowed to use this edu meeting CSS template for your school or university or business. You can feel free to modify or edit this layout.</p>
                <div className="main-button-red">
                  <div className="scroll-to-section"><a href="#contact">Join Us Now!</a></div>
              </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="item">
                <h3>APPLY FOR BACHELOR DEGREE</h3>
                <p>You are not allowed to redistribute the template ZIP file on any other template website. Please contact us for more information.</p>
                <div className="main-button-yellow">
                  <div className="scroll-to-section"><a href="#contact">Join Us Now!</a></div>
              </div>
              </div>
            </div>
          </div>
        </div>
      <HomeAccordion />
      </div>
    </div>
  </section>
  <CourseCarousel/>

  <section className="our-facts">
    <div className="container">
      <div className="row">
           <CountUpAnimation />

        <div className="col-lg-6 align-self-center">
          <div className="video">
            <a href="https://www.youtube.com/watch?v=HndV87XpkWg" target="_blank" rel="noreferrer"><img src="assets/images/play-icon.png" alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="contact-us" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-9 align-self-center">
          <div className="row">
            <div className="col-lg-12">
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="right-info">
            <ul>
              <li>
                <h6>Phone Number</h6>
                <span>010-020-0340</span>
              </li>
              <li>
                <h6>Email Address</h6>
                <span>info@meeting.edu</span>
              </li>
              <li>
                <h6>Street Address</h6>
                <span>Rio de Janeiro - RJ, 22795-008, Brazil</span>
              </li>
              <li>
                <h6>Website URL</h6>
                <span>www.meeting.edu</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <p>Copyright © {currentYear} Leki Emmanuel . All Rights Reserved. 
          <br />linkedin: <a href="/" target="_parent" title="school website">Leki Academy</a></p>
    </div>
  </section>




    </div>
  );
};

export default Home;
