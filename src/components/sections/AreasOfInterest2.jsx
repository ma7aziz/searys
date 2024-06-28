import React from 'react';
import cosmoImg from '/src/assets/cosmo.jpg';
import MediImg from '/src/assets/medicine.jpg';
import DeviceImg from '/src/assets/Glucometer.jpg';
import ProtienImg from '/src/assets/ProteinPowder.jpg';


const services = [
  {
    imgSrc: MediImg,
    alt: 'Pharmaceutical',
    title: 'Pharmaceutical',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.',
  },
  {
    imgSrc: cosmoImg,
    alt: 'Cosmoceutical',
    title: 'Cosmoceutical',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.',
  },
  {
    imgSrc: ProtienImg,
    alt: 'Nutraceutical',
    title: 'Nutraceutical',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.',
  },
  {
    imgSrc: DeviceImg,
    alt: 'Medical Devices',
    title: 'Medical Devices',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.',
  },
];

const cardStyle = {
  color: 'blue',
  padding: '20px',
  borderRadius: '20px',
  marginBottom: '10px',
  textAlign: 'center',
};

const imgStyle = {
  objectFit: 'cover',
  width: '100%',
  height: '350px',
  borderRadius: '15px',
  marginBottom: '15px',
};

function ServicesPage() {
  return (
    <div className='p-5' id='ServicesPage'>
      <div className="container">
        <h1 className="text-primary text-center display-4 fw-semibold mx-auto mb-4 lh-sm">Our Areas Of Interest</h1>
        <h5 className='fe-semibold text-center mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero fugit debitis aut sit laborum adipisci tenetur, non velit libero excepturi, placeat facilis</h5>
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div className="col-12 col-md-6 mb-4" key={index}>
              <div className="card card-body shadow" style={cardStyle}>
                <img
                  src={service.imgSrc}
                  style={imgStyle}
                  alt={service.alt}
                />
                <h2 className="text-capitalize text-green mb-4 fs-3">{service.title}</h2>
                <p className="text-primary">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
