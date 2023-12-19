import React from 'react'
import { Link } from 'react-router-dom'


const Meetings = () => {




  return (
    <div>
  <section className="heading-page header-text" id="top">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h6>Here are our upcoming meetings</h6>
          <h2>Upcoming Meetings</h2>
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
              <div className="filters">
                <ul>
                  <li data-filter="*"  className="active">All Meetings</li>
                  <li data-filter=".soon">Soon</li>
                  <li data-filter=".imp">Important</li>
                  <li data-filter=".att">Attractive</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row grid">
                <div className="col-lg-4 templatemo-item-col all soon">
                  <div className="meeting-item">
                    <div className="thumb">
                      <div className="price">
                        <span>$14.00</span>
                      </div>
                      <Link to ="/meeting-details"><img src="assets/images/meeting-01.jpg" alt="" /></Link>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>Nov <span>12</span></h6>
                      </div>
                      <Link to="/meeting-details"><h4>New Lecturers Meeting</h4></Link>
                      <p>Morbi in libero blandit lectus<br />cursus ullamcorper.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 templatemo-item-col all imp">
                  <div className="meeting-item">
                    <div className="thumb">
                      <div className="price">
                        <span>$22.00</span>
                      </div>
                      <Link  to ="/meeting-details"><img src="assets/images/meeting-02.jpg" alt="" /></Link>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>Nov <span>14</span></h6>
                      </div>
                      <Link to ="/meeting-details"><h4>Online Teaching Techniques</h4></Link>
                      <p>Morbi in libero blandit lectus<br />cursus ullamcorper.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 templatemo-item-col all soon">
                  <div className="meeting-item">
                    <div className="thumb">
                      <div className="price">
                        <span>$24.00</span>
                      </div>
                      <Link to ="/meeting-details"><img src="assets/images/meeting-03.jpg" alt="" /></Link>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>Nov <span>16</span></h6>
                      </div>
                      <Link to ="/meeting-details"><h4>Network Teaching Concept</h4></Link>
                      <p>Morbi in libero blandit lectus<br />cursus ullamcorper.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 templatemo-item-col all att">
                  <div className="meeting-item">
                    <div className="thumb">
                      <div className="price">
                        <span>$32.00</span>
                      </div>
                      <Link to ="/meeting-details"><img src="assets/images/meeting-04.jpg" alt="" /></Link>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>Nov <span>18</span></h6>
                      </div>
                      <Link to ="/meeting-details"><h4>Online Teaching Tools</h4></Link>
                      <p>Morbi in libero blandit lectus<br />cursus ullamcorper.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 templatemo-item-col all att">
                  <div className="meeting-item">
                    <div className="thumb">
                      <div className="price">
                        <span>$34.00</span>
                      </div>
                      <Link to ="/meeting-details"><img src="assets/images/meeting-02.jpg" alt="" /></Link>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>Nov <span>22</span></h6>
                      </div>
                      <Link to ="/meeting-details"><h4>New Teaching Techniques</h4></Link>
                      <p>Morbi in libero blandit lectus<br />cursus ullamcorper.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 templatemo-item-col all imp">
                  <div className="meeting-item">
                    <div className="thumb">
                      <div className="price">
                        <span>$45.00</span>
                      </div>
                      <Link to ="/meeting-details"><img src="assets/images/meeting-03.jpg" alt="" /></Link>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>Nov <span>24</span></h6>
                      </div>
                      <Link to ="/meeting-details"><h4>Technology Conference</h4></Link>
                      <p>TemplateMo is the best website<br />when it comes to Free CSS.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 templatemo-item-col all imp att">
                  <div className="meeting-item">
                    <div className="thumb">
                      <div className="price">
                        <span>$52.00</span>
                      </div>
                      <Link to ="/meeting-details"><img src="assets/images/meeting-01.jpg" alt="" /></Link>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>Nov <span>27</span></h6>
                      </div>
                      <Link to ="/meeting-details"><h4>Online Teaching Techniques</h4></Link>
                      <p>Morbi in libero blandit lectus<br />cursus ullamcorper.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 templatemo-item-col all soon imp">
                  <div className="meeting-item">
                    <div className="thumb">
                      <div className="price">
                        <span>$64.00</span>
                      </div>
                      <Link to ="/meeting-details"><img src="assets/images/meeting-02.jpg" alt="" /></Link>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>Nov <span>28</span></h6>
                      </div>
                      <Link to ="/meeting-details"><h4>Instant Lecture Design</h4></Link>
                      <p>Morbi in libero blandit lectus<br />cursus ullamcorper.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 templatemo-item-col all att soon">
                  <div className="meeting-item">
                    <div className="thumb">
                      <div className="price">
                        <span>$74.00</span>
                      </div>
                      <Link to ="/meeting-details"><img src="assets/images/meeting-03.jpg" alt="" /></Link>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>Nov <span>30</span></h6>
                      </div>
                      <Link to ="/meeting-details"><h4>Online Social Networking</h4></Link>
                      <p>Morbi in libero blandit lectus<br />cursus ullamcorper.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="pagination">
                <ul>
                  <li><a href="#">1</a></li>
                  <li className="active"><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <p>Copyright © 2022 Edu Meeting Co., Ltd. All Rights Reserved. 
          <br />Design: <a href="https://templatemo.com/page/1" target="_parent" title="website templates">TemplateMo</a></p>
    </div>
  </section>
    </div>
  )
}

export default Meetings
