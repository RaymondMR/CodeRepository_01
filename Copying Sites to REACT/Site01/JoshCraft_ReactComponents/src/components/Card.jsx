
import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

export const CardBody = ({ children, className }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

export const CardFooter = ({ children, className }) => {
  return (
    <div className={`p-6 bg-gray-50 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
