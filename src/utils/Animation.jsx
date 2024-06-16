import { gsap } from 'gsap'

export const fadeIn = (element, duration = 1, delay = 0) => {
    gsap.fromTo(
      element,
      { opacity: 0 },
      { opacity: 1, duration, delay, ease: 'power3.out' }
    );
  };
  