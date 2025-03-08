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
              <button className="book-button">
                Reservar Ahora
              </button>
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