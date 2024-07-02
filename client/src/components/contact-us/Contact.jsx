import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import { Base_url } from '../../config';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${Base_url}/admin/send-contact-info`, formData);
      if (response.status === 200) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        toast.error('Failed to send message.');
      }
    } catch (error) {
      toast.error('Error:', error);
    }
  };

  return (
    <div>
      <section>
        <div className="section-header">
          <div className="container">
            <h2>Contact Us</h2>
            <h3>Get in touch with us today. We look forward to serving you and your family.</h3>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-home"></i>
                </div>
                <div className="contact-info-content">
                  <h4>Address</h4>
                  <p>4671 Sugar Camp Road,<br /> Owatonna, Minnesota, <br />55060</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-info-content">
                  <h4>Phone</h4>
                  <p>571-457-2321</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-info-content">
                  <h4>Email</h4>
                  <p>ntamerrwael@mfano.ga</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form id="contact-form" onSubmit={handleSubmit}>
                <h2>Send Message</h2>
                <div className="input-box">
                  <input type="text" required name="name" value={formData.name} onChange={handleChange} />
                  <span>Full Name</span>
                </div>

                <div className="input-box">
                  <input type="email" required name="email" value={formData.email} onChange={handleChange} />
                  <span>Email</span>
                </div>

                <div className="input-box">
                  <input type="text" required name="phone" value={formData.phone} onChange={handleChange} />
                  <span>Phone</span>
                </div>

                <div className="input-box">
                  <textarea required name="message" value={formData.message} onChange={handleChange}></textarea>
                  <span>Type your Message...</span>
                </div>

                <div className="input-box">
                  <input type="submit" value="Send" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
