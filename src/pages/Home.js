import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Components/Header.css';
import CountUpAnimation from '../Components/Countup.js';
import ServiceCarousel from '../Components/ServiceCarousel.jsx'
import HomeAccordion from '../Components/HomeAccordion.jsx';
import CourseCarousel from '../Components/CourseCarousel.js';
import ContactForm from '../Components/ContactForm.js';



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
              <p>This is an edu meeting HTML CSS template provided by <a rel="nofollow" href="https://templatemo.com/page/1" target="_blank">TemplateMo website</a>. This is a Bootstrap v5.1.3 layout. The video background is taken from Pexels website, a group of young people by <a rel="nofollow" href="https://www.pexels.com/@pressmaster" target="_blank">Pressmaster</a>.</p>
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
              <li><a href="#">Sed tempus enim leo</a></li>
              <li><a href="#">Aenean molestie quis</a></li>
              <li><a href="#">Cras et metus vestibulum</a></li>
              <li><a href="#">Nam et condimentum</a></li>
              <li><a href="#">Phasellus nec sapien</a></li>
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
      {/* <div className="col-lg-6">
<div className="accordions is-first-expanded">
  <article className="accordion">
      <div className="accordion-head">
          <span>About Edu Meeting HTML Template</span>
          <span className="icon">
              <i className="icon fa fa-chevron-right"></i>
          </span>
      </div>
      <div className="accordion-body">
          <div className="content">
              <p>If you want to get the latest collection of HTML CSS templates for your websites, you may visit <a rel="nofollow" href="https://www.toocss.com/" target="_blank">Too CSS website</a>. If you need a working contact form script, please visit <a href="https://templatemo.com/contact" target="_parent">our contact page</a> for more info.</p>
          </div>
      </div>
  </article>
  <article className="accordion">
      <div className="accordion-head">
          <span>HTML CSS Bootstrap Layout</span>
          <span className="icon">
              <i className="icon fa fa-chevron-right"></i>
          </span>
      </div>
      <div className="accordion-body">
          <div className="content">
              <p>Etiam posuere metus orci, vel consectetur elit imperdiet eu. Cras ipsum magna, maximus at semper sit amet, eleifend eget neque. Nunc facilisis quam purus, sed vulputate augue interdum vitae. Aliquam a elit massa.<br/><br/>
              Nulla malesuada elit lacus, ac ultricies massa varius sed. Etiam eu metus eget nibh consequat aliquet. Proin fringilla, quam at euismod porttitor, odio odio tempus ligula, ut feugiat ex erat nec mauris. Donec viverra velit eget lectus sollicitudin tincidunt.</p>
          </div>
      </div>
  </article>
  <article className="accordion">
      <div className="accordion-head">
          <span>Please tell your friends</span>
          <span className="icon">
              <i className="icon fa fa-chevron-right"></i>
          </span>
      </div>
      <div className="accordion-body">
          <div className="content">
              <p>Ut vehicula mauris est, sed sodales justo rhoncus eu. Morbi porttitor quam velit, at ullamcorper justo suscipit sit amet. Quisque at suscipit mi, non efficitur velit.<br/><br/>
              Cras et tortor semper, placerat eros sit amet, porta est. Mauris porttitor sapien et quam volutpat luctus. Nullam sodales ipsum ac neque ultricies varius.</p>
          </div>
      </div>
  </article>
  <article className="accordion last-accordion">
      <div className="accordion-head">
          <span>Share this to your colleagues</span>
          <span className="icon">
              <i className="icon fa fa-chevron-right"></i>
          </span>
      </div>
      <div className="accordion-body">
          <div className="content">
              <p>Maecenas suscipit enim libero, vel lobortis justo condimentum id. Interdum et malesuada fames ac ante ipsum primis in faucibus.<br/><br/>
              Sed eleifend metus sit amet magna tristique, posuere laoreet arcu semper. Nulla pellentesque ut tortor sit amet maximus. In eu libero ullamcorper, semper nisi quis, convallis nisi.</p>
          </div>
      </div>
  </article>
</div>
</div> */}
 
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
            <a href="https://www.youtube.com/watch?v=HndV87XpkWg" target="_blank"><img src="assets/images/play-icon.png" alt="" /></a>
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
      <p>Copyright © 2023 Leki Emmanuel . All Rights Reserved. 
          <br />linkedin: <a href="https://www.linkedin.com/in/leki-emmanuel-8b7540157/" target="_blank" title="school website">Leki Academy</a></p>
    </div>
  </section>




    </div>
  );
};

export default Home;
