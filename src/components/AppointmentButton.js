import React, { useState } from 'react';

const AppointmentButton = ({ variant = 'primary' }) => {
  const [showModal, setShowModal] = useState(false);
  const [service, setService] = useState('');
  const [date, setDate] = useState('');

  const handleWhatsApp = () => {
    const message = `¡Hola! Quiero agendar una cita para ${service || 'sus servicios'} el ${date || 'próximamente'}.`;
    window.open(`https://wa.me/573207604741?text=${encodeURIComponent(message)}`, '_blank');
    setShowModal(false);
  };

  const handleEmail = () => {
    const subject = `Solicitud de cita para ${service || 'sus servicios'}`;
    const body = `Buen día,\n\nMe gustaría agendar una cita para ${service || 'sus servicios'} el ${date || 'próximamente'}.\n\nSaludos cordiales.`;
    window.open(`mailto:publicardosquebradas@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${
          variant === 'primary'
            ? 'bg-amber-500 hover:bg-amber-600 text-gray-900'
            : 'border-2 border-amber-500 hover:bg-amber-500 text-gray-900'
        } shadow-md`}
      >
        <span className="font-semibold drop-shadow-sm">Agendar Cita</span>
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Agendar Cita</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Servicio de interés</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full p-2 border rounded text-gray-900 bg-white"
                >
                  <option value="">Seleccione un servicio</option>
                  <option value="Polarizado">Polarizado</option>
                  <option value="Alarma">Alarma</option>
                  <option value="Sistema de sonido">Sistema de sonido</option>
                  <option value="Aire acondicionado">Aire acondicionado</option>
                  <option value="Pantalla para carro">Pantalla para carro</option>
                  <option value="Publicidad vehicular">Publicidad vehicular</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Fecha preferida</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-2 border rounded text-gray-900 bg-white"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.479 5.093 1.479 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Contactar por WhatsApp
                </button>

                <button
                  onClick={handleEmail}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-gray-900 rounded font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                  </svg>
                  Enviar correo electrónico
                </button>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="mt-4 text-sm text-gray-500 hover:text-gray-700"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppointmentButton;

// DONE