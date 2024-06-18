import React from 'react';

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

function AreasOfInterest2() {
  return (
    <div className='p-5' id='ServicesPage'>
      <div className="container">
        <h1 className="text-primary text-center display-4 fw-semibold mx-auto mb-4 lh-sm">Our Areas Of Interest</h1>
        
        <h5 className='fe-semibold text-center mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero fugit debitis aut sit laborum adipisci tenetur, non velit libero excepturi, placeat facilis </h5>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 mb-4">
            <div className="card card-body shadow" style={cardStyle}>
              <img
                src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={imgStyle}
                alt="Pharmaceutical"
              />
              <h2 className="text-capitalize text-green mb-4 fs-3">Pharmaceutical</h2>
              <p className="text-primary">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
            </div>
          </div>

          <div className="col-12 col-md-6 mb-4">
            <div className="card card-body shadow" style={cardStyle}>
              <img
                src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={imgStyle}
                alt="Cosmoceutical"
              />
              <h2 className="text-capitalize text-green mb-4 fs-3">Cosmoceutical</h2>
              <p className="text-primary">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
            </div>
          </div>

          <div className="col-12 col-md-6 mb-4 ">
            <div className="card card-body shadow" style={cardStyle}>
              <img
                src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={imgStyle}
                alt="Nutraceutical"
              />
              <h2 className="text-capitalize text-green mb-4  fs-3">Nutraceutical</h2>
              <p className="text-primary">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
            </div>
          </div>

          <div className="col-12 col-md-6 mb-4">
            <div className="card card-body shadow" style={cardStyle}>
              <img
                src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={imgStyle}
                alt="Medical Devices"
              />
              <h2 className="text-capitalize text-green mb-4 fs-3">Medical Devices</h2>
              <p className="text-primary">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AreasOfInterest2;
