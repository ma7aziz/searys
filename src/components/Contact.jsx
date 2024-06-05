import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import emailjs from 'emailjs-com';


function Contact() {
  const textRef = useRef(null);
  const contentRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  useEffect(() => {
    const text = textRef.current.textContent;
    const chars = text.split('');

    // Clear the container and add each character in a span
    textRef.current.innerHTML = '';
    chars.forEach(char => {
      const span = document.createElement('span');
      span.textContent = char;
      textRef.current.appendChild(span);
    });

    // Animate each span and then fade in the rest of the content
    const tl = gsap.timeline();
    tl.fromTo(
      textRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', stagger: 0.02 } // Reduced duration and stagger
    ).fromTo(
      contentRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: 'power3.out' }, // Reduced duration
      0 // No delay after text animation ends
    );
  }, []);

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
      console.log('send message ')
    
          setShowSuccessNotification(true); // Show success notification
          setTimeout(() => {
            setShowSuccessNotification(false); // Hide notification after 3 seconds
          }, 8000);
          setFormData({
            name: '',
            phone: '',
            email: '',
            message: ''
          }); // Clear the form
        
    }
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1 className='fw-bold' ref={textRef}>
          Elevate Your Product Line with Our Expertise in Pharmaceuticals, Nutritionals, and Cosmetics.
        </h1>
      </div>
      <div ref={contentRef} style={{ opacity: 0 }}> {/* Initially hidden */}
        <hr />
        <div className="row mt-2">
          <div className="col-md-6">
            <h3 className='fw-bold mb-3'>Reach Out Today!</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum cupiditate ab animi ratione, at laborum.</p>
            <hr />
            <div className="row">
              <div className="col-12">
                <p className='text-lg-start'>
                  <strong className='text-primary'>Phone</strong>
                  <br />
                  +20 101236987
                </p>
              </div>
              <div className="col-12">
                <p className='text-lg-start'>
                  <strong className='text-primary'>Email</strong>
                  <br />
                  info@pharmaco.com
                </p>
              </div>
              <div className="col-12">
                <p className='text-lg-start'>
                  <strong className='text-primary'>Address</strong>
                  <br />
                  55 Lorem, ipsum dolor, Cairo, Egypt.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <h3 className='fw-semibold'>Send A Message</h3>
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
          </div>
        </div>
      </div>
      {showSuccessNotification && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          Message sent successfully!
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setShowSuccessNotification(false)}></button>
        </div>
      )}
    </div>
  );
}

export default Contact;
