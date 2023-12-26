import React from 'react';
import CountUp from 'react-countup';

const CountUpAnimation = () => {
  return (
    <div className="col-lg-6">
      <div className="row">
        <div className="col-lg-12">
          <h2>A Few Facts About Our University</h2>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-12">
              <div className="count-area-content percentage">
                <CountUp start={0} end={94} duration={6} separator="," className=' h1 text-warning' suffix="%" />
                <div className="count-title">Succeeded Students</div>
              </div>
            </div>
            <div className="col-12">
              <div className="count-area-content">
                <CountUp start={0} end={126} duration={6} separator="," className='h1 text-warning'  />
                <div className="count-title">Current Teachers</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-12">
              <div className="count-area-content new-students">
                <CountUp start={0} end={2345} duration={6} separator="," className='h1 text-warning' />
                <div className="count-title">New Students</div>
              </div>
            </div>
            <div className="col-12">
              <div className="count-area-content">
                <CountUp start={0} end={32} duration={6} separator="," className='h1 text-warning' />
                <div className="count-title">Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountUpAnimation;
