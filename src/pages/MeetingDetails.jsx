import React from 'react'
import { Link } from 'react-router-dom'
const currentYear = new Date().getFullYear();
const MeetingDetails = () => {
  return (
    <div>
         <section className="heading-page header-text" id="top">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h6>Get all details</h6>
          <h2>Online Teaching and Learning Tools</h2>
        </div>
      </div>
    </div>
  </section>

  <section className="meetings-page" id="meetings">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-12">
              <div className="meeting-single-item">
                <div className="thumb">
                  <div className="price">
                    <span>$14.00</span>
                  </div>
                  <div className="date">
                    <h6>Nov <span>12</span></h6>
                  </div>
                  <Link to="/meetings"><img src="assets/images/single-meeting.jpg" alt="meeting" /></Link>
                </div>
                <div className="down-content">
                  <a href="/"><h4>Online Teaching and Learning Tools</h4></a>
                  <p>Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22795-008, Brazil</p>
                  <p className="description">
                    This is an edu meeting HTML, CSS, and React template provided by <a href="/"  >Emmanuel</a>. This is a Bootstrap v5.3.2 layout. If you need more free website templates like this one, please visit our website TemplateMo. Please tell your friends about our website. Thank you. If you want to get the latest collection of HTML CSS templates for your websites, you may visit <a  href="/" >Edu</a>. If you need a working contact form script, please visit <a href="/" >our contact page</a> for more info.
                    
                    <br/>You are allowed to use this edu meeting CSS template for your school or university or business. You can feel free to modify or edit this layout. You are not allowed to redistribute the template ZIP file on any other template website. Please contact us for more information.
                  </p>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="hours">
                        <h5>Hours</h5>
                        <p>Monday - Friday: 07:00 AM - 13:00 PM<br />Saturday- Sunday: 09:00 AM - 15:00 PM</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="location">
                        <h5>Location</h5>
                        <p>Recreio dos Bandeirantes, 
                        <br />Rio de Janeiro - RJ, 22795-008, Brazil</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="book now">
                        <h5>Book Now</h5>
                        <p>010-020-0340<br />090-080-0760</p>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="share">
                        <h5>Share:</h5>
                        <ul>
                          <li><Link to="/">Facebook</Link>,</li>
                          <li><Link to="/">Twitter</Link>,</li>
                          <li><Link to ="/">Linkedin</Link>,</li>
                          <li><Link to="/">Behance</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="main-button-red">
                <Link to ="/meetings">Back To Meetings List</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <p>Copyright © {currentYear} Leki Emmanuel . All Rights Reserved. 
          <br />linkedin: <a href="/" target="_parent"title="school website">Leki Academy</a></p>
    </div>
  </section>

    </div>
  )
}

export default MeetingDetails
