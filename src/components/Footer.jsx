// src/components/Footer.js
import React from 'react';
import { FiPhone, FiMail, FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
    return (
      <footer className="footer text-light py-4 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3 my-auto text-center text-md-start">
              <img src="/src/assets/logo-w.png" className="footer-logo" alt="Seary Ceauticals Logo" />
            </div>
            <div className="col-md-3 my-auto text-center text-md-start">
              <h5 className='text-green'>Contact Us</h5>
              <div>
                <p className='d-flex align-items-center justify-content-center justify-content-md-start'>
                  <FiPhone className='me-2 text-green' />
                  <a href="tel:+20101236987" className="">+20 101236987</a>
                </p>
                <p className='d-flex align-items-center justify-content-center justify-content-md-start'>
                  <FiMail className='me-2 text-green' />
                  <a href="mailto:info@pharmaco.com" className="">info@searyceuticals.com</a>
                </p>
              </div>
            </div>
            <div className="col-md-3">
                <h6 className='text-green'>Quick Links</h6>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-light">About Us</a></li>
                  <li><a href="#" className="text-light">Products</a></li>
                  <li><a href="#" className="text-light">Contact</a></li>
                </ul>
              </div>
            <div className="col-md-3 text-center text-md-start">
              <h5 className='text-green'>Follow Us</h5>
              <div className='d-flex justify-content-center justify-content-md-start'>
                <a href="#" className="text-light me-3 footer-icon"><FiFacebook /></a>
                <a href="#" className="text-light me-3 footer-icon"><FiTwitter /></a>
                <a href="#" className="text-light me-3 footer-icon"><FiLinkedin /></a>
                <a href="#" className="text-light footer-icon"><FiInstagram /></a>
              </div>
            </div>
          </div>
        </div>
       
          <div className="mt-3 copyright">
            &copy; {new Date().getFullYear()} Seary Ceuticals. All rights reserved.
          </div>
        
      </footer>
    );
  };
  
  export default Footer;
  