
import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://via.placeholder.com/1500)' }}>
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">A Mayor for All of Boston</h1>
        <p className="text-lg md:text-2xl mb-8">Josh Kraft is running for Mayor to build a better, more equitable Boston for everyone.</p>
        <div className="space-x-4">
          <Button variant="primary">Get Involved</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
