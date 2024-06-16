import React from 'react'
const rowStyle = {
  height: '300px',
  backgroundColor: '#fff',
  color: 'blue',
  padding: ' 20px',
  borderRadius: '20px' ,
  marginBottom: '10px'
}
const imgStyle = {
  objectFit:'fill',
  width: '100%',
  height: '250px ',
}

function AreasOfInterest2() {
  return (
    <section className='p5'>
        <h1 className="text-primary text-center display-4 fw-semibold mx-auto mb-4 lh-sm">Our Areas Of Interest</h1>
        <div className="container">

          <div className=" card card-body row" style={rowStyle}>
            <div className="col-md-6" >
              <img src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={imgStyle}
                 />

            </div>
            <div className="col-md-6">
              <h2 className="text-capitalize text-green mb-4 fs-3">Pharmaceutical</h2>
              <p className="text-primary">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>

            </div>
          </div>
          <div className=" card card-body  row" style={rowStyle}>

            
            <div className="col-md-6">
              <h2 className="text-capitalize text-green mb-4 fs-3">Cosmoceutical</h2>
              <p className="text-primary">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>

            </div>
            <div className="col-md-6" >
              <img src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={imgStyle}
                alt="" />

            </div>
          </div>
          <div className=" card card-body  row" style={rowStyle}>

            <div className="col-md-6" >
              <img src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={imgStyle}
                 />

            </div>
            <div className="col-md-6">
              <h2 className="text-capitalize text-green mb-4 fs-3">Nutraceutical</h2>
              <p className="text-primary">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>

            </div>
          </div>
          <div className=" card card-body row" style={rowStyle}>

            
            <div className="col-md-6">
              <h2 className="text-capitalize text-green mb-4 fs-3">Medical Devices</h2>
              <p className="text-primary">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>

            </div>
            <div className="col-md-6" >
              <img src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={imgStyle}
                alt="" />

            </div>
          </div>
        </div>
      
    </section>
  )
}

export default AreasOfInterest2
