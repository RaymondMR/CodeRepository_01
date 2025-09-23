
import React from 'react';

const Button = ({ children, onClick, variant = 'primary', type = 'button' }) => {
  const baseStyles = 'px-6 py-3 rounded-md font-bold text-white';

  const variants = {
    primary: 'bg-red-600 hover:bg-red-700',
    secondary: 'bg-blue-900 hover:bg-blue-800',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
