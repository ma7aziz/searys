import React, { useEffect } from 'react';
import '/src/styles/Preloader.scss';

const LogoSvgAnimated = () => {

  useEffect(() => {
    const paths = document.querySelectorAll('.draw-svg path'); // Select all paths in the SVG

    paths.forEach(path => {
      const length = path.getTotalLength(); // Get the total length of each path
      const fillColor = path.getAttribute('fill'); // Get the fill color of the path

      path.style.strokeDasharray = length; // Set dasharray to the length
      path.style.strokeDashoffset = length; // Set dashoffset to the length (initially hides the path)
      path.style.stroke = fillColor; // Set stroke color to fill color

      // Trigger a reflow to apply styles immediately
      path.getBoundingClientRect();

      // Animate the drawing effect
      path.style.transition = 'stroke-dashoffset 1s ease-in-out, fill 1s ease-in-out'; // Animation duration and easing
      path.style.strokeDashoffset = '0'; // Draw the path by setting dashoffset to 0

      // Animate the fill effect
      setTimeout(() => {
        path.style.fill = fillColor; // Ensure the fill color is applied after drawing
      }, 1000); // Delay to sync with stroke animation
    });

  }, []);

  return (
    <div className="svg-container">
      <svg className="draw-svg" width="400" height="600" viewBox="0 0 492 913" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="draw-svg-path fill-animation" id="path1" opacity="0.986" fillRule="evenodd" clipRule="evenodd" d="M224.5 1.49999C287.737 -3.19601 345.071 12.637 396.5 49C452.42 93.99 483.92 152.49 491 224.5C491.67 274.5 491.67 324.5 491 374.5C490.22 376.29 489.05 377.79 487.5 379C469.33 379.48 451.17 379.98 433 380.5C371.74 382.22 322.739 358.89 286 310.5C263.059 276.74 253.226 239.41 256.5 198.5C277.833 198.5 299.167 198.5 320.5 198.5C315.453 248.59 335.119 285.09 379.5 308C392.54 313.84 406.21 317.01 420.5 317.5C420.67 289.16 420.5 260.83 420 232.5C411.31 160.168 373.48 110.001 306.5 82C231.541 58.28 167.374 75.113 114 132.5C90.2171 161.151 76.5501 194.151 73.0001 231.5C71.4191 281.16 71.2521 330.83 72.5001 380.5C48.5001 380.5 24.5001 380.5 0.500141 380.5C0.333141 337.17 0.500141 293.83 1.00014 250.5C1.04014 160.907 37.5401 90.74 110.5 40C145.553 18.26 183.553 5.42699 224.5 1.49999Z" fill="#4BAB8F"/>
        <path className="draw-svg-path fill-animation" id="path2" opacity="0.99" fillRule="evenodd" clipRule="evenodd" d="M0.5 423.5C163.833 423.5 327.167 423.5 490.5 423.5C491.65 511.15 491.82 598.82 491 686.5C482.48 771.79 441.98 836.62 369.5 881C288.229 922.92 206.896 922.92 125.5 881C46.487 834.86 4.987 765.69 1 673.5C0.3 627.5 0.467 581.5 1.5 535.5C24.833 535.5 48.167 535.5 71.5 535.5C71.391 584.17 71.891 632.84 73 681.5C81.529 749.11 116.362 797.61 177.5 827C245.81 852.54 308.144 842.2 364.5 796C399.35 763.18 417.85 722.68 420 674.5C421.65 614.17 421.82 553.84 420.5 493.5C280.496 493.79 140.496 493.45 0.5 492.5C0.5 469.5 0.5 446.5 0.5 423.5Z" fill="#1A3B7D"/>
      </svg>
    </div>
  );
};

const Preloader = ({ setIsLoading }) => {
  useEffect(() => {
    // Simulate loading time or wait for an actual event
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <div className="preloader">
      <LogoSvgAnimated />
    </div>
  );
};

export default Preloader;
