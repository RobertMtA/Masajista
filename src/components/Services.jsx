import React from 'react';
import { motion } from 'framer-motion';
import { FaSpa, FaRunning, FaMagic, FaWhatsapp } from 'react-icons/fa';
import './Services.css';

function Services() {
  const services = [
    {
      icon: <FaSpa />,
      title: "Masaje Relajante",
      description: "Un masaje suave para aliviar el estrés y la tensión. Disfruta de una experiencia de relajación profunda que restaurará tu equilibrio.",
      benefits: [
        "Reduce el estrés y la ansiedad",
        "Mejora la calidad del sueño",
        "Alivia dolores musculares"
      ]
    },
    {
      icon: <FaRunning />,
      title: "Masaje Deportivo",
      description: "Ideal para atletas y personas activas. Mejora tu rendimiento y recuperación muscular con técnicas especializadas.",
      benefits: [
        "Acelera la recuperación muscular",
        "Previene lesiones",
        "Mejora el rendimiento deportivo"
      ]
    },
    {
      icon: <FaMagic />,
      title: "Fantasías",
      description: "Un viaje sensorial donde los límites se desvanecen y los deseos toman forma. Déjate llevar por experiencias que despiertan los sentidos.",
      benefits: [
        "Experiencia personalizada",
        "Ambiente relajante",
        "Atención profesional"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const handleBooking = (serviceTitle) => {
    const whatsappNumber = "541141766377";
    const message = encodeURIComponent(
      `Hola, me interesa el servicio de ${serviceTitle}. ¿Podrías darme más información?`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="services">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <h2>Servicios Profesionales</h2>
        <div className="service-list">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="service-card"
              variants={itemVariants}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <ul className="service-benefits">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>

              <button
                className="book-button"
                onClick={() => handleBooking(service.title)}
                aria-label={`Reservar ${service.title}`}
              >
                <FaWhatsapp />
                <span>Reservar Ahora</span>
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Services;