import React from 'react';
import AppointmentButton from './AppointmentButton';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">PUBLI CAR LUJOS</h1>
          <p className="text-xl md:text-2xl mb-8">Especialistas en accesorios y publicidad vehicular</p>
          <div className="flex flex-wrap gap-4">
            <AppointmentButton variant="primary" />
            <a 
              href="#servicios" 
              className="px-6 py-3 border-2 border-white hover:bg-white hover:text-black font-medium rounded-lg transition duration-300"
            >
              Nuestros Servicios
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;