// Footer.js
import React from 'react';
import { FiPhone, FiMail, FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="text-light py-4 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 my-auto">
                        <h2 className='text-green'>Seary Ceuticals</h2>
                        <p>
                            Our commitment to excellence ensures the best for your products.
                        </p>
                    </div>
                    <div className="col-md-4 my-auto">
                        <h5 className='text-green'>Contact Us</h5>
                        <p>
                            <p className='d-flex align-items-center'><span className='me-2 text-green'><FiPhone /></span> <a href="tel:+20101236987" className="text-light">+20 101236987</a></p>
                            <p><span className='text-green'><FiMail /></span> <a href="mailto:info@pharmaco.com" className="text-light">info@searyceuaticals.com</a></p>
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5 className='text-green'>Follow Us</h5>
                        <div>
                            <a href="#" className="text-light me-3"><FiFacebook /> </a>
                            <a href="#" className="text-light me-3"><FiTwitter /></a>
                            <a href="#" className="text-light me-3"><FiLinkedin /></a>
                            <a href="#" className="text-light"><FiInstagram /> </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-3 bg-dark-primary border-top pt-3">
                    &copy; {new Date().getFullYear()} Seary Ceuticals. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
