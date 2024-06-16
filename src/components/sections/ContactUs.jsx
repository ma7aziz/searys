import React from 'react'
import ContactForm from './ContactForm'
import pattern from '/src/assets/lopattern.png'
import pattern2 from '/src/assets/lopattern.png'



function ContactUs() {
    return (
        <>
            <section style={{backgroundImage:`url(${pattern2})` ,backgroundPosition: 'right center'  , backgroundRepeat: 'repeat',backgroundSize: 'cover' , } } >
                <div className="container " >

                    <div className="row gy-4">
                        <div className="col-lg-6">
                            <img className='w-100'
                                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>

                        <div className="col-lg-6 ">
                            <h2 className='text-sm-center text-lg-start'>Reach Out Today</h2>
                            <p className='text-dark text-sm-center text-lg-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, iste.</p>
                            
                            <div className="row mt-5">
                                <div className="col-md-6">
                                    <p className='text-lg-start text-dark'>
                                        <span className='text-primary'>Phone: </span>

                                        +20 101236987
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <p className='text-lg-start text-dark'>
                                        <span className='text-primary'>Email:</span>
                                        info@pharmaco.com
                                    </p>
                                </div>
                                <div className="col-12">
                                    <p className='text-lg-start  text-dark'>
                                        <span className='text-primary'>Address: </span>
                                        
                                        55 Lorem, ipsum dolor, Cairo, Egypt.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs
