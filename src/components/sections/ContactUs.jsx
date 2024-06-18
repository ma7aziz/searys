import React from 'react';
import pattern2 from '/src/assets/lopattern.png';

function ContactUs() {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${pattern2})`,
          backgroundPosition: 'right center',
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover',
          padding: '60px 0'
        }}
      >
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-6">
              <img
                className="img-fluid rounded shadow"
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Contact Us"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="text-center text-lg-start mb-4">Reach Out Today</h2>
              <p className="text-dark text-center text-lg-start mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, iste.
              </p>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <p className="text-dark text-lg-start">
                    <span className="fw-bold text-primary">Phone:</span> +20 101236987
                  </p>
                </div>
                <div className="col-md-6 mb-3">
                  <p className="text-dark text-lg-start">
                    <span className="fw-bold text-primary">Email:</span> info@pharmaco.com
                  </p>
                </div>
                <div className="col-12">
                  <p className="text-dark text-lg-start">
                    <span className="fw-bold text-primary">Address:</span> 55 Lorem, ipsum dolor, Cairo, Egypt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
