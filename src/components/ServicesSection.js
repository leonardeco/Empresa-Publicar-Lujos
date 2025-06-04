import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      category: "Accesorios para Autos",
      items: ["Polarizados", "Alarmas", "Sonidos", "Aire Acondicionado", "Pantallas para Carros"]
    },
    {
      category: "Publicidad Vehicular",
      items: ["Avisos", "Estampados", "Litografía"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-amber-600">{service.category}</h3>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;