import '/src/styles/HomeCarousel.scss';
import React from 'react';
import 'swiper/css';
import Img1 from '/src/assets/carouselImg1.jpg'
import Img2 from '/src/assets/carouselImg2.jpg'

const images = [
    { imageUrl: Img1, caption: 'Image 1 caption', text: '' },
    { imageUrl: Img2, caption: 'Image 2 caption', text: 'This is text on top of Image 2' },
];


const HomeCarousel = () => {



    return (
        <swiper-container slides-per-view="1" space-between="20"
        scrollbar-clickable="true"
        autoplay="true"
        autoplay-delay="6000"
        pagination-dynamic-bullets="true" 
        navigation="true" loop="true"
        style={{
            height: "90vh"
        }}
        >
            {images.map((image, index) => (
                <Swiper-slide key={index} style={{height : "100%"}}>
                    <div className="slide-container" style={{height: "100%"}}>  
                        <img src={image.imageUrl} width={"100%"}  />
                        <div className="slide-caption">
                            <h5>{image.text}</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius autem repellendus vel cumque explicabo dolore temporibus aperiam dolores nobis labore non, libero et inventore porro quibusdam. Ratione nobis eveniet assumenda!</p>
                       

                       
                        </div>  

                    </div>
                </Swiper-slide>
            ))}


        </swiper-container>
    );
};

export default HomeCarousel;
