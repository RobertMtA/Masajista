import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="hero" id="inicio">
            <motion.div
                className="hero-content"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.8 }}
            >
                <h1>Lisander Masseur</h1>
                <p className="subtitle">Masajes Relajantes y Eróticos </p>
                
                <div className="hero-description">
                    <p>Especialista en técnicas de masaje para aliviar el estrés y la tensión muscular</p>
                    <p>Más de 15 años de experiencia en terapias corporales</p>
                </div>

                <div className="hero-cta">
                    <a 
                        href="#servicios" 
                        className="primary-button"
                        aria-label="Ver nuestros servicios"
                    >
                        Servicios
                    </a>
                    <a 
                        href="#contacto" 
                        className="secondary-button"
                        aria-label="Contactar ahora"
                    >
                        Contactar
                    </a>
                </div>

                <div className="hero-features">
                    <div className="feature">
                        <span className="feature-icon">✓</span>
                        <span>Sesiones Personalizadas</span>
                    </div>
                    <div className="feature">
                        <span className="feature-icon">✓</span>
                        <span>Ambiente Relajante</span>
                    </div>
                    <div className="feature">
                        <span className="feature-icon">✓</span>
                        <span>Atención Profesional</span>
                    </div>
                </div>
            </motion.div>

            <div className="hero-background">
                <div className="overlay"></div>
                <img 
                    src="/img/img-portada.jpg" 
                    alt="Ambiente de masajes"
                    className="hero-image"
                    loading="eager"
                />
            </div>

        </section>
    );
}

export default Hero;