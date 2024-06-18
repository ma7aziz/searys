import React, { useEffect, useRef } from 'react';


function MouseCursor() {
  const cursorOuterRef = useRef(null);
  const cursorInnerRef = useRef(null);

  useEffect(() => {
    const cursorOuter = cursorOuterRef.current;
    const cursorInner = cursorInnerRef.current;

    const moveCursor = (e) => {
      cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      cursorInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const handleMouseEnter = () => {
      cursorOuter.style.visibility = 'visible';
      cursorInner.style.visibility = 'visible';
    };

    const handleMouseLeave = () => {
      cursorOuter.style.visibility = 'hidden';
      cursorInner.style.visibility = 'hidden';
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div className="mouse-cursor cursor-outer" ref={cursorOuterRef}></div>
      <div className="mouse-cursor cursor-inner" ref={cursorInnerRef}></div>
    </>
  );
}

export default MouseCursor;
