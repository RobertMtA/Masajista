import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FaArrowRight, FaHome } from 'react-icons/fa'; // Importa solo los íconos que necesitas
import './Hero.css';

// Importar imágenes si están en src/img/
import img14 from '../img/img14.jpg';
import img4 from '../img/img4.jpg';
import img20 from '../img/img20.jpg';

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
            src={img14} // Usar la imagen importada
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
            src={img4} // Usar la imagen importada
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
            src={img20} // Usar la imagen importada
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