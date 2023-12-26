
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import '../ServiceCarousel.css';
import 'slick-carousel/slick/slick-theme.css';


const ServiceCarousel = () => {
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
    <section className="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Slider {...settings} className="custom-slider">
            <div className="carousel-item">
              <div className="item">
                <div className="icon">
                  <img src="assets/images/service-icon-01.png" alt="" />
                </div>
                <div className="down-content">
                  <h4>Best Education</h4>
                  <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.
                  
                  </p>
                </div>
              </div>
              </div>
              <div className="carousel-item">
              <div className="item">
                <div className="icon">
                  <img src="assets/images/service-icon-02.png" alt="" />
                </div>
                <div className="down-content">
                  <h4>Best Teachers</h4>
                  <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
                </div>
              </div>
              </div>
              <div className="carousel-item">
              <div className="item">
                <div className="icon">
                  <img src="assets/images/service-icon-03.png" alt="" />
                </div>
                <div className="down-content">
                  <h4>Best Students</h4>
                  <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
                </div>
              </div>
              </div>
              <div className="carousel-item">
              <div className="item">
                <div className="icon">
                  <img src="assets/images/service-icon-02.png" alt="" />
                </div>
                <div className="down-content">
                  <h4>Online Meeting</h4>
                  <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
                </div>
              </div>
              </div>
              <div className="carousel-item">
              <div className="item">
                <div className="icon">
                  <img src="assets/images/service-icon-03.png" alt="" />
                </div>
                <div className="down-content">
                  <h4>Best Networking</h4>
                  <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
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

export default ServiceCarousel;

