import React from 'react';
import { FaSpa, FaRunning, FaMagic } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaSpa />,
      title: "Masaje Relajante",
      description: "Un masaje suave para aliviar el estrés y la tensión. Disfruta de una experiencia de relajación profunda que restaurará tu equilibrio.",
      price: "Consultar Precio"
    },
    {
      icon: <FaRunning />,
      title: "Masaje Deportivo",
      description: "Ideal para atletas y personas activas. Mejora tu rendimiento y recuperación muscular con técnicas especializadas.",
      price: "Consultar Precio"
    },
    {
      icon: <FaMagic />,
      title: "Fantasías",
      description: "Un viaje sensorial donde los límites se desvanecen y los deseos toman forma. Déjate llevar por experiencias que despiertan los sentidos y sumérgete en un mundo donde todo es posible.",
      price: "Consultar precio"
    }
  ];

  // Número de WhatsApp (en formato internacional, sin el signo +)
  const whatsappNumber = "+541141766377"; // Reemplaza con tu número de WhatsApp

  // Mensaje predefinido para WhatsApp
  const whatsappMessage = (serviceTitle) => {
    return encodeURIComponent(`Hola, estoy interesado/a en reservar el servicio de ${serviceTitle}. ¿Podrías darme más información?`);
  };

  return (
    <section id="services" className="services">
      <h2>Los Servicios que brindo</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <React.Fragment key={index}>
            <div className="service-item">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-price">
                {service.price}
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage(service.title)}`}
                className="book-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar Ahora
              </a>
            </div>
            {index < services.length - 1 && (
              <div className="service-separator" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Services;