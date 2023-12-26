import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
// send data to backend API
  const handleSubmit = (e) => {
    e.preventDefault();
 
    console.log(formData); 
  };

  return (
    <form id="contact" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-12">
          <h2>Let's get in touch</h2>
        </div>
        <div className="col-lg-4">
          <fieldset>
            <input
              name="name"
              type="text"
              id="name"
              placeholder="YOUR NAME...*"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </fieldset>
        </div>
        <div className="col-lg-4">
          <fieldset>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="YOUR EMAIL...*"
              required
              pattern="[^ @]*@[^ @]*"
              value={formData.email}
              onChange={handleChange}
            />
          </fieldset>
        </div>
        <div className="col-lg-4">
          <fieldset>
            <input
              name="subject"
              type="text"
              id="subject"
              placeholder="SUBJECT...*"
              required
              value={formData.subject}
              onChange={handleChange}
            />
          </fieldset>
        </div>
        <div className="col-lg-12">
          <fieldset>
            <textarea
              name="message"
              className="form-control"
              id="message"
              placeholder="YOUR MESSAGE...*"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </fieldset>
        </div>
        <div className="col-lg-12">
          <fieldset>
            <button type="submit" id="form-submit" className="button">
              SEND MESSAGE NOW
            </button>
          </fieldset>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
