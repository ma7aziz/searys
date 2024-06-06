// ContactForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // All fields are valid, send the email
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        .then((result) => {
          if (onSuccess) {
            onSuccess(); // Trigger the success callback
          }
          setFormData({
            name: '',
            phone: '',
            email: '',
            message: ''
          }); // Clear the form
        }, (error) => {
          alert('Failed to send message, please try again.');
        });
    }
  };

  return (
    <form className='mt-4' onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          className={`form-control custom-input ${errors.name ? 'is-invalid' : ''}`}
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>
      <div className="mb-3">
        <input
          type="text"
          className={`form-control custom-input ${errors.phone ? 'is-invalid' : ''}`}
          id="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
      </div>
      <div className="mb-3">
        <input
          type="email"
          className={`form-control custom-input ${errors.email ? 'is-invalid' : ''}`}
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>
      <div className="mb-3">
        <textarea
          className={`form-control custom-input ${errors.message ? 'is-invalid' : ''}`}
          id="message"
          rows="4"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <div className="invalid-feedback">{errors.message}</div>}
      </div>
      <div className='form-group d-flex justify-content-end'>
        <button type="submit" className="contact-button">Send</button>
      </div>
    </form>
  );
};

export default ContactForm;
