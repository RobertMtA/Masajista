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

    // Arrays de imágenes y videos
    const images = Array.from({ length: 27 }, (_, i) => i + 1); // [1, 2, 3, ..., 27]
    const videos = Array.from({ length: 8 }, (_, i) => i + 1);  // [1, 2, 3, ..., 8]

    return (
        <section id="gallery" className="gallery">
            <h2>Galería de Imágenes</h2>
            <div className="image-grid">
                {images.map((num) => {
                    const imageSrc = `/img/img-sensible${num}.jpg`; // Ruta para imágenes
                    return (
                        <div key={num} className="image-container">
                            <img
                                src={imageSrc}
                                alt={`Imagen ${num}`}
                                className="gallery-image"
                                loading="lazy"
                                onClick={() => openLightbox(imageSrc)}
                                onError={(e) => {
                                    e.target.style.display = 'none'; // Oculta la imagen si no se carga
                                }}
                            />
                        </div>
                    );
                })}
            </div>

            <div className="gallery-separator"></div>

            <h2>Galería de Videos</h2>
            <div className="video-grid">
                {videos.map((num) => {
                    const videoSrc = `/videos/video-sensible${num}.mp4`; // Ruta para videos
                    return (
                        <div key={num} className="video-container">
                            <video
                                src={videoSrc}
                                controls
                                className="gallery-video"
                                loading="lazy"
                                preload="metadata"
                                onError={(e) => {
                                    e.target.style.display = 'none'; // Oculta el video si no se carga
                                    console.error(`Error al cargar el video: ${videoSrc}`); // Muestra un error en la consola
                                }}
                            ></video>
                        </div>
                    );
                })}
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