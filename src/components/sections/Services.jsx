import React from 'react';
import cosmoImg from '/src/assets/cosmo.jpg';
import '/src/styles/Services.scss';



const ServiceCard = ({ image, title }) => (
    <div className="card text-white">
      <img src={image} className="card-img" alt={title} />
      <div className="card-img-overlay d-flex align-items-end justify-content-center">
        <h3 className="card-title p-2 rounded">{title}</h3>
      </div>
    </div>
  );

const services = [
    { image: cosmoImg, title: 'Pharmaceutical' },
    { image: cosmoImg, title: 'Cosmoceutical' },
    { image: cosmoImg, title: 'Neutraceutical' },
    { image: cosmoImg, title: 'Medical Devices' },
];


const Services = () => {
    return (
      <>
        <section className="text-center py-5 px-4 px-xl-0 d-flex flex-column flex-nowrap justify-content-center" id="serviceSection">
          <span className="text-yellow fs-5 mx-auto mb-2 text-capitalize d-flex align-items-center">
            what we're offering
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-primary ms-3" style={{ width: '1.5rem', height: '1.5rem' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </span>
          <h1 className="text-white display-4 fw-semibold mx-auto mb-4 lh-sm">Our Areas Of Interest</h1>
          <div className="container">
            <div className="row">
              {services.map((service, index) => (
                <div className="col-12 col-md-6 mb-4" key={index}>
                  <ServiceCard image={service.image} title={service.title} />
                </div>
              ))}
            </div>

          </div>

        </section>
      </>
    );
  }
  

export default Services ;