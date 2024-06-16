import React, { forwardRef } from 'react';

const Button = forwardRef(({ children, className, ...props }, ref) => (
  <button ref={ref} className={className} {...props}>
    {children}
  </button>
));

export default Button;