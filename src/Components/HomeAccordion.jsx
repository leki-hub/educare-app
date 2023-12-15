
import React, { useState } from 'react';

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className={`accordion ${isOpen ? 'is-active' : ''}`}>
      <div className="accordion-head" onClick={toggleAccordion}>
        <span>{title}</span>
        <span className="icon">
          <i className={`icon fa ${isOpen ? 'fa-chevron-down' : 'fa-chevron-right'}`}></i>
        </span>
      </div>
      {isOpen && (
        <div className="accordion-body">
          <div className="content">
            <p>{content}</p>
          </div>
        </div>
      )}
    </article>
  );
}

function HomeAccordion() {
  return (
    <div className="col-lg-6">
      <div className="accordions is-first-expanded">
        <Accordion
          title="About Edu Meeting HTML Template"
          content="If you want to get the latest collection of HTML CSS templates for your websites, you may visit Too CSS website..."
        />
        <Accordion
          title="HTML CSS Bootstrap Layout"
          content="Etiam posuere metus orci, vel consectetur elit imperdiet eu..."
        />
        <Accordion
          title="Please tell your friends"
          content="Ut vehicula mauris est, sed sodales justo rhoncus eu..."
        />
        <Accordion
          title="Share this to your colleagues"
          content="Maecenas suscipit enim libero, vel lobortis justo condimentum id..."
        />
      </div>
    </div>
  );
}

export default HomeAccordion;


