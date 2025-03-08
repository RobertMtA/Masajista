import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
const [selectedImage, setSelectedImage] = useState(null);

const openLightbox = (imageSrc) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
};

return (
    <section id="gallery" className="gallery">
    <h2>Galería de Imágenes</h2>
    <div className="image-grid">
        {[1, 2, 8, 9, 19, 15, 13, 17, 3].map((num) => (
        <div key={num} className="image-container">
            <img
              src={`/img/img${num}.jpg`} // Ruta corregida
            alt={`Imagen ${num}`}
            className="gallery-image"
            loading="lazy"
              onClick={() => openLightbox(`/img/img${num}.jpg`)} // Ruta corregida
            />
        </div>
        ))}
    </div>

    <div className="gallery-separator"></div>

    <h2>Galería de Videos</h2>
    <div className="video-grid">
        {[1, 2, 3, 4, 5, 6].map((num) => (
        <div key={num} className="video-container">
            <video
              src={`/img/video${num}.mp4`} // Ruta corregida
            controls
            className="gallery-video"
            loading="lazy"
            preload="metadata"
            ></video>
        </div>
        ))}
    </div>

    {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
        <button className="close-button" onClick={closeLightbox}>
            <FaTimes />
        </button>
        <img
            src={selectedImage}
            alt="Imagen ampliada"
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
        />
        </div>
    )}
    </section>
);
};

export default Gallery;