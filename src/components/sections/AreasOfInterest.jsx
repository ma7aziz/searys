import React from 'react';
import '/src/styles/AreasOfInterest.scss';
import cosmoImg from '/src/assets/cosmo.jpg';
import 'swiper/css';

import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';

register();

const slides = [
  { imageUrl: cosmoImg, title: 'Pharmaceutical', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corporis nulla aspernatur ut voluptates voluptate?' },
  { imageUrl: cosmoImg, title: 'Cosmoceutical', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corporis nulla aspernatur ut voluptates voluptate?' },
  { imageUrl: cosmoImg, title: 'Nutraceutical', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corporis nulla aspernatur ut voluptates voluptate?' },
  { imageUrl: cosmoImg, title: 'Nutraceutical', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corporis nulla aspernatur ut voluptates voluptate?' },
];

const AreasOfInterest = () => {


  return (
    <section className="text-center py-5 px-4 px-xl-0 d-flex flex-column flex-nowrap justify-content-center" id="serviceSection">
      <span className="text-yellow fs-5 mx-auto mb-2 text-capitalize d-flex align-items-center">
        what we're offering
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-primary ms-3" style={{ width: '1.5rem', height: '1.5rem' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
      </span>
      <h1 className="text-white display-4 fw-semibold mx-auto mb-4 lh-sm">Our Areas Of Interest</h1>
      <div className="container overflow-hidden">
        <swiper-container
          slidesPerView="1"
          speed="500"
          navigation="true"
          pagination= "true"

        >
          {slides.map((slide, index) => (
            <Swiper-slide key={index}>
              <div className="card" style={{ maxHeight: "60vh" }}>
                <div className="row">
                  <div className="col-6">
                    <img src={slide.imageUrl} style={ImgStyle} alt="" />
                  </div>
                  <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                    <h4>{slide.title}</h4>
                    <p className="text-primary">{slide.text}</p>
                    <button className="btn btn-success">Read More</button>
                  </div>
                </div>
              </div>
            </Swiper-slide>
          ))}
        </swiper-container>
      </div>
    </section>
  );
};

export default AreasOfInterest;
 