import '/src/styles/HomeCarousel.scss';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import Img1 from '/src/assets/carouselImg1.jpg'
import Img2 from '/src/assets/carouselImg2.jpg'
import "swiper/css/effect-fade"
import "swiper/css/navigation";
import Button from './Button';
const slides = [
    {
        imageUrl: Img1,
        caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        text: '',
        buttonText: 'Our Story',
        buttonLink: 'https://example.com',
        buttonId: 'btn1'
    },
    {
        imageUrl: Img2,
        caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        text: 'This is text on top of Image',
        buttonText: 'Learn More',
        buttonLink: 'https://example.com/learn-more',
        buttonId: 'btn2'
    },
];

const HomeCarousel = () => {
    return (
        <Swiper
            effect="fade"
            speed={1500}
            slidesPerView={1}
            spaceBetween={20}
            scrollbar={{ clickable: true }}
            autoplay={{ delay: 6000 }}
            pagination={{ dynamicBullets: true }}
            loop={true}
            style={{ height: '90vh' }}
        >
            {slides.map((image, index) => (
                <SwiperSlide key={index} style={{ height: '100%' }}>
                    <div className="slide-container" style={{ height: '100%' }}>
                        <img src={image.imageUrl} width="100%" alt={`Slide ${index}`} />
                        <div className="slide-caption">
                            <h1 className="text-light">{image.caption}</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, recusandae?</p>
                            <div className="main-buttons">
                                <Button className="contact-button" href={image.buttonLink} id={image.buttonId}>
                                    {image.buttonText}
                                </Button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
export default HomeCarousel;
