import React, { useRef, useEffect } from 'react';
import { gsap  } from 'gsap';


function Button({ children, className }) {
    return (
      <button className={className}>
        {children}
      </button>
    );
  }
  


  function Intro() {
    const containerRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const text = container.textContent;
        const chars = text.split('');
    
        // Clear the container and add each character in a span
        container.innerHTML = '';
        chars.forEach(char => {
          const span = document.createElement('span');
          span.textContent = char;
          container.appendChild(span);
        });
        const tl = gsap.timeline();

    
        /// Animate each span
    tl.fromTo(
        container.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.01 }
      );
  
      // Animate the button to show after the text animation ends
      tl.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' },

      );
      }, []);
    

    return (
      <div className="main-section">
        <p className="main-description" ref={containerRef}>
          Nulla pariatur. Excepteur Nemo enim ipsam voluptatem quia <br />
        </p>
        <div className="main-buttons">
          <button className="contact-button"  ref={buttonRef}>Contact Us</button>
          {/* <Button className="services-button">Our Services</Button> */}
        </div>
      </div>
    );
  }



  function IntroSection() {
    return (
      <>
        <header className="header">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/52b597771600ee231f250cd3a2d350f0504218b29e26d6a72c3563e42f5ccf79?apiKey=5965941a686444fdbcc3d0e8a74590d8&" alt="Header Image" className="header-image" />
          <Intro />
        </header>
        
      </>
    );
  }
  
export default IntroSection; 