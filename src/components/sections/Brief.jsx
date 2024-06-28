import React from 'react';
import image1 from '../../assets/img-1.jpg';
import image2 from '../../assets/img-2.jpg';
import Button from './Button';
import '/src/styles/BriefSection.scss';

function Brief() {
  return (
    <section id="briefSection">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <img src={image1} alt="Image 1" className="img-fluid" />
          </div>
          <div className="col-md-6" id="briefText">
            <span className="text-yellow fs-9 mb-3 text-capitalize d-flex align-items-center">
              Who We Are
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="text-green ms-3"
                style={{ width: '1.5rem', height: '1.5rem' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </span>
            <h2 className="mb-3">Seary Ceauticals</h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repudiandae voluptas praesentium amet
              mollitia enim magnam porro iure ratione, aut neque nam voluptate perferendis consequatur? Distinctio nemo
              dicta quo eum.
            </p>
            <a className="read-more mt-3" >Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brief;
