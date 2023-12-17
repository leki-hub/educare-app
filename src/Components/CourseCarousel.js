import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const CourseCarousel = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    
  };

  return (
    <section className="our-courses" id="courses">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>Our Popular Courses</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <Slider {...settings} className="custom-slider">
              <div className="item">
                <img src="assets/images/course-01.jpg" alt="Course One" />
                <div className="down-content">
                <h4>Morbi tincidunt elit vitae justo rhoncus</h4>
                <div className="info">
                  <div className="row">
                    <div className="col-8">
                      <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div className="col-4">
                       <span>$160</span>
                    </div>
                  </div>
                </div>
              </div>
              </div>

              <div className="item">
                <img src="assets/images/course-02.jpg" alt="Course Two" />
                <div className="down-content">
                <h4>Curabitur molestie dignissim purus vel</h4>
                <div className="info">
                  <div className="row">
                    <div className="col-8">
                      <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div className="col-4">
                       <span>$180</span>
                    </div>
                  </div>
                </div>
              </div>
              </div>

              <div className="item">
              <img src="assets/images/course-03.jpg" alt="Course 3" />
              <div className="down-content">
                <h4>Nulla at ipsum a mauris egestas tempor</h4>
                <div className="info">
                  <div className="row">
                    <div className="col-8">
                      <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div className="col-4">
                       <span>$140</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="assets/images/course-04.jpg" alt=""/>
              <div className="down-content">
                <h4>Aenean molestie quis libero gravida</h4>
                <div className="info">
                  <div className="row">
                    <div className="col-8">
                      <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div className="col-4">
                       <span>$120</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCarousel;
