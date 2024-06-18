import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

const Button = forwardRef(({ children, className, href, to, ...props }, ref) => {
  const buttonProps = {
    ref,
    className: `btn ${className}`, 
    ...props
  };


  if (href) {
    return (
      <a {...buttonProps} href={href}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link {...buttonProps} to={to}>
        {children}
      </Link>
    );
  }


  return (
    <button {...buttonProps}>
      {children}
    </button>
  );
});

export default Button;