
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ServiceCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section className="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Slider {...settings}>
              <div className="item">
                <div className="icon">
                  <img src="assets/images/service-icon-01.png" alt="" />
                </div>
                <div className="down-content">
                  <h4>Best Education</h4>
                  <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
                </div>
              </div>

              <div className="item">
                <div className="icon">
                  <img src="assets/images/service-icon-02.png" alt="" />
                </div>
                <div className="down-content">
                  <h4>Best Teachers</h4>
                  <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
                </div>
              </div>

              <div className="item">
                <div className="icon">
                  <img src="assets/images/service-icon-03.png" alt="" />
                </div>
                <div className="down-content">
                  <h4>Best Students</h4>
                  <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
                </div>
              </div>

              <div className="item">
                <div className="icon">
                  <img src="assets/images/service-icon-02.png" alt="" />
                </div>
                <div className="down-content">
                  <h4>Online Meeting</h4>
                  <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
                </div>
              </div>

              <div className="item">
                <div className="icon">
                  <img src="assets/images/service-icon-03.png" alt="" />
                </div>
                <div className="down-content">
                  <h4>Best Networking</h4>
                  <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
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
