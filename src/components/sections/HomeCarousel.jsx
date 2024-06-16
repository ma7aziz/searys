// import React, { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { Carousel } from 'react-bootstrap';
// import Button from './Button'; // Adjust the import path as needed
import '/src/styles/HomeCarousel.scss';
// import Img1 from '/src/assets/carouselImg1.jpg'
// import Img2 from '/src/assets/carouselImg2.jpg'



// function HomeCarousel() {
//     const sectionStyle = {
//         padding : "0" ,
//         maxHeight: "100vh"
//     }
//     const textRef = useRef(null);
//     const buttonRef = useRef(null);

//     useEffect(() => {
//         const container = textRef.current;
//         const text = container.textContent;
//         const chars = text.split('');

//         // Clear the container and add each character in a span
//         container.innerHTML = '';
//         chars.forEach(char => {
//             const span = document.createElement('span');
//             span.textContent = char;
//             container.appendChild(span);
//         });
//         const tl = gsap.timeline();

//         // Animate each span
//         tl.fromTo(
//             container.children,
//             { opacity: 0, y: 20 },
//             { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.01 }
//         );

//         // Animate the button to show after the text animation ends
//         tl.fromTo(
//             buttonRef.current,
//             { opacity: 0, scale: 0 },
//             { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }
//         );
//     }, []);

//     return (


//         <section style={sectionStyle}>
//         <Carousel className="carousel-container" controls={false} 
//         pause={'hover'}
//         indicators={true} touch={true} fade={true}>
//             <Carousel.Item>
//                 <img
//                     className=" carousel-img"
//                     src={Img1}
//                     alt="First slide"
//                 />
//                 <div className="carousel-caption">
//                     <p className="main-description" ref={textRef}>
//                         Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.
//                     </p>
//                     <Button className="contact-button" ref={buttonRef}>Contact Us</Button>
//                 </div>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                     className="carousel-img"
//                     src={Img2}
//                     alt="Second slide"
//                 />
//                 <div className="carousel-caption">
//                     <p className="main-description" ref={textRef}>
//                         Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.
//                     </p>
//                 </div>
//             </Carousel.Item>
//             {/* <Carousel.Item>
//                 <img
//                     className="d-block w-100 carousel-img"
//                     src=""
//                     alt="Third slide"
//                 />
//                 <div className="carousel-caption">
//                     <p className="main-description" ref={textRef}>
//                         Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.
//                     </p>
//                 </div>
//             </Carousel.Item> */}
//         </Carousel>

//         </section>
//     );
// }

// export default HomeCarousel;




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
