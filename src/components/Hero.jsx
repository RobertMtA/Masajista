import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FaArrowRight, FaHome } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                {/* Aquí puedes agregar contenido adicional si es necesario */}
            </div>

            <Carousel
                fade
                indicators={true}
                interval={3000}
                className="hero-carousel"
            >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/img-sensible4.jpg" // Ruta corregida
                        alt="Masaje Relajante"
                    />
                    <Carousel.Caption>
                        <h3>Masaje Relajante</h3>
                        <p>Un masaje suave para aliviar el estrés y la tensión</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/img-sensible1.jpg" // Ruta corregida
                        alt="Masaje Deportivo"
                    />
                    <Carousel.Caption>
                        <h3>Masaje Deportivo</h3>
                        <p>Ideal para atletas y personas activas</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/img-sensible11.jpg" // Ruta corregida
                        alt="Masaje Especial"
                    />
                    <Carousel.Caption>
                        <h3>Masajes Especiales</h3>
                        <p>Experiencias únicas de relajación</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
};

export default Hero;