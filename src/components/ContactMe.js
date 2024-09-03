import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

//EmailJS Cred
const EMAILJS_USER_ID = 'OxRwESLP4OHm3YASX';
const EMAILJS_TEMPLATE_ID = 'template_94yha3r';
const EMAILJS_SERVICE_ID = 'service_dtg5rol';
function ContactMe() {
    const [formData, setFormData] = useState({
      from_name: '',
      reply_to: '',
      subject: '',
      message: ''
    });
    const [status, setStatus] = useState('');
  
    useEffect(() => {
      emailjs.init(EMAILJS_USER_ID);
    }, []);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus('Sending...');
  
      try {
        const result = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData);
        console.log('Email sent successfully:', result.text);
        setStatus('Message sent successfully!');
        setFormData({ from_name: '', reply_to: '', subject: '', message: '' });
      } catch (error) {
        console.error('Error sending email:', error);
        setStatus('Failed to send message. Please try again.');
      }
    };
  
    return (
      <div className="col p-4">
        <div className="p-4 slide-in-top">
          <h2 className="ff-jose fw-bold ls-2">Contact Me</h2>
          <hr />
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-3">
              <label htmlFor="from_name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="reply_to" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="reply_to"
                name="reply_to"
                value={formData.reply_to}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
          {status && <p className="mt-3">{status}</p>}
        </div>
      </div>
    );
  }
  
  export default ContactMe;