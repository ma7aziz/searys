import '/src/styles/HomeCarousel.scss';
import React from 'react';
// import 'swiper/css';
import Img1 from '/src/assets/carouselImg1.jpg'
import Img2 from '/src/assets/carouselImg2.jpg'
import "swiper/css/effect-fade"
import "swiper/css/navigation";
import Button from './Button';
const images = [
    { imageUrl: Img1, caption: 'Image 1 caption', text: '' },
    { imageUrl: Img2, caption: 'Image 2 caption', text: 'This is text on top of Image 2' },
];


const HomeCarousel = () => {



    return (
        <swiper-container

        effect={"fade"}
        speed= {1500}
        slides-per-view="1" space-between="20"
        scrollbar-clickable="true"
        autoplay="true"
        autoplay-delay="6000"
        pagination-dynamic-bullets="true" 
       loop="true"
       crossfade = "true"
        style={{
            height: "90vh"
        }}
 
        >
            {images.map((image, index) => (
                <Swiper-slide key={index} style={{height : "100%"}}>
                    <div className="slide-container" style={{height: "100%"}}>  
                        <img src={image.imageUrl} width={"100%"}  />
                        <div className="slide-caption">
                            <h2 className='text-green'>{image.caption}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, recusandae?</p>
                            <div className="main-buttons">
                            <Button className="contact-button" href="https://example.com">
                                    Conatact Us
                            </Button>
                            <Button className="services-button" href="https://example.com">
                                    Our Services
                            </Button>
                            </div>
                        </div>  

                    </div>
                </Swiper-slide>
            ))}


        </swiper-container>
    );
};

export default HomeCarousel;
