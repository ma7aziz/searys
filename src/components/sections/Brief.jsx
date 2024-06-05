import React from "react";
import image from '../../assets/img-1.jpg'

const sectionStyle = {
    paddingTop:'50px',
    
}
function Brief() {
    return (
        <>
        
            {/* <section className="breif-section">
                <div className="container">

                    <div className="row">
                        <div className="images-container">
                            <img src={image} alt="" width={200} height={300} />
                        </div>
                        <div className="text-container">
                            <h3>Seary Ceautical</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Maxime, officiis veniam,
                                facilis alias ab at voluptatem architecto,
                                voluptatibus cum magnam in soluta vitae aperiam quae?
                                Exercitationem deleniti fugiat id facere?</p>
                        </div>
                        
                    </div>
                </div>

            </section> */}


           <section style={sectionStyle}
           >
            <div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Expedita numquam odio eligendi illo itaque 
                incidunt consectetur tempora, ut quisquam ducimus?</p>
            </div>
           </section>


        </>
    )
}

export default Brief; 