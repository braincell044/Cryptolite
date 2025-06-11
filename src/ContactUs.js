// ContactUs.js
import React, { useState } from 'react';
import './App.css';
import Profile from './assest/image/Screenshot 2025-02-10 at 11.44.18.png'


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  fetch("http://localhost:3001/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        to: "recipient@example.com",
        subject: "Hello!",
        message: "This is a test email from SES."
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));


  return (
    <section id="contact">
      <div className="main-contact">
        <h3 style={{ textAlign: 'center' }}>Contact Us</h3>
        <hr />
        <p style={{ textAlign: 'center' }}>
          If you have any questions about our company or need help with our service,
          please don't hesitate to contact us. We will reply as soon as possible.
        </p>
        <div className="container text-center">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-6">
              <div className="contact-1" data-aos="fade-right">
                <h6>cryptolitetrade.live</h6>
                <p>
                  2 Crawford Place,
                  <br />
                  London, W1H 5NA
                  <br />
                  United Kingdom
                </p>
                <p className="tro">admin@cryptolitetrade.live</p>
                <br />
                <h4>Legal Documents</h4>
                <img
                  src={Profile}
                  alt="certified"
                  style={{ width: '100px', height: '150px' }}
                />
                <p>Company certificate</p>
              </div>
            </div>
            <div className="col col-12 col-sm-12 col-md-6">
              <form data-aos="fade-left" className="form-1" onSubmit={handleSubmit}>
                <label htmlFor="name" style={{ fontWeight: 'bold' }} className=' mx-2'>
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className='my-2 mx-5  margin-hero'
                />
                <br />
                <label htmlFor="email" style={{ fontWeight: 'bold' }}
                className=' mx-2 margin-hero'>
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className='my-3 mx-5  margin-hero'
                />
                <br />
                <label htmlFor="message" style={{ fontWeight: 'bold' }} >
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className='my-2 mx-5  margin-hero'
                />
                <br />
                <input type="submit" value="Send Message"  className='my-3 '
                />
              </form>
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default ContactUs;
