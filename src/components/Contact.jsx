import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import ContactForm from './sections/ContactForm';

const formStyle = {
  // backgroundColor : "#010e3d "
  padding: "25px",
  borderRadius : "10px",
  backgroundColor : "rgba(42,63,146, 0.2)"
}

function Contact() {
  const textRef = useRef(null);
  const contentRef = useRef(null);
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

  const handleSuccess = () => {
    setShowSuccessNotification(true);
    setTimeout(() => {
      setShowSuccessNotification(false);
    }, 3000); // Adjust the timeout as needed
  };

  return (
    <div id="ContactPage">

    <div className="container mt-5">

      <div className="text-center mb-5">
        <h1 className='fw-bold' ref={textRef}>
          Elevate Your Product Line with Our Expertise in Pharmaceuticals, Nutritionals, and Cosmetics.
        </h1>
      </div>
      <div> {/* Initially hidden */}
        <hr />
        <div className="row mt-2">
          <div className="col-md-6">
            <h3 className='fw-bold mb-3'>Reach Out Today!</h3>
            <p className='text-dark'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum cupiditate ab animi ratione, at laborum.</p>
            <hr />
            <div className="row">
              <div className="col-12">
                <p className='text-lg-start text-dark'>
                  <strong className='text-primary'>Phone</strong>
                  <br />
                  +20 101236987
                </p>
              </div>
              <div className="col-12">
                <p className='text-lg-start text-dark'>
                  <strong className='text-primary'>Email</strong>
                  <br />
                  info@pharmaco.com
                </p>
              </div>
              <div className="col-12">
                <p className='text-lg-start text-dark'>
                  <strong className='text-primary'>Address</strong>
                  <br />
                  55 Lorem, ipsum dolor, Cairo, Egypt.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6" style={formStyle} >
            <h2>Send A Message</h2>
            <ContactForm onSuccess={handleSuccess} />
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
    </div>
  );
}

export default Contact;
