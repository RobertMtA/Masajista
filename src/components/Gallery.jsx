import React, { useState } from 'react';
import { FaTimes, FaHeart, FaComment } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [likes, setLikes] = useState({}); // Estado para los "likes" de cada imagen/video
    const [comments, setComments] = useState({}); // Estado para los comentarios de cada imagen/video
    const [newComments, setNewComments] = useState({}); // Estado para el comentario temporal de cada imagen/video

    const openLightbox = (imageSrc) => {
        setSelectedImage(imageSrc);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    // Función para manejar el "like" de una imagen o video
    const handleLike = (id) => {
        setLikes((prevLikes) => ({
            ...prevLikes,
            [id]: !prevLikes[id], // Cambia el estado del "like"
        }));
    };

    // Función para manejar el cambio en el input de comentarios
    const handleCommentChange = (id, value) => {
        setNewComments((prevNewComments) => ({
            ...prevNewComments,
            [id]: value, // Actualiza el comentario temporal para el elemento específico
        }));
    };

    // Función para agregar un comentario a una imagen o video
    const addComment = (id) => {
        const comment = newComments[id] || '';
        if (comment.trim() === '') return; // No permite comentarios vacíos
        setComments((prevComments) => ({
            ...prevComments,
            [id]: [...(prevComments[id] || []), comment], // Agrega el nuevo comentario
        }));
        setNewComments((prevNewComments) => ({
            ...prevNewComments,
            [id]: '', // Limpia el input de comentario para el elemento específico
        }));
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
                    const imageId = `image-${num}`; // Identificador único para la imagen
                    return (
                        <div key={num} className="media-card">
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
                            <div className="media-actions">
                                <button onClick={() => handleLike(imageId)} className="like-button">
                                    <FaHeart color={likes[imageId] ? 'red' : 'grey'} />
                                </button>
                                <button onClick={() => document.getElementById(`comment-input-${imageId}`).focus()} className="comment-button">
                                    <FaComment />
                                </button>
                            </div>
                            <div className="comments-section">
                                <input
                                    id={`comment-input-${imageId}`}
                                    type="text"
                                    placeholder="Añade un comentario..."
                                    value={newComments[imageId] || ''}
                                    onChange={(e) => handleCommentChange(imageId, e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && addComment(imageId)}
                                />
                                <button onClick={() => addComment(imageId)}>Comentar</button>
                                <div className="comments-list">
                                    {comments[imageId] && comments[imageId].map((comment, index) => (
                                        <p key={index}>{comment}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="gallery-separator"></div>

            <h2>Galería de Videos</h2>
            <div className="video-grid">
                {videos.map((num) => {
                    const videoSrc = `/videos/video-sensible${num}.mp4`; // Ruta para videos
                    const videoId = `video-${num}`; // Identificador único para el video
                    return (
                        <div key={num} className="media-card">
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
                            <div className="media-actions">
                                <button onClick={() => handleLike(videoId)} className="like-button">
                                    <FaHeart color={likes[videoId] ? 'red' : 'grey'} />
                                </button>
                                <button onClick={() => document.getElementById(`comment-input-${videoId}`).focus()} className="comment-button">
                                    <FaComment />
                                </button>
                            </div>
                            <div className="comments-section">
                                <input
                                    id={`comment-input-${videoId}`}
                                    type="text"
                                    placeholder="Añade un comentario..."
                                    value={newComments[videoId] || ''}
                                    onChange={(e) => handleCommentChange(videoId, e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && addComment(videoId)}
                                />
                                <button onClick={() => addComment(videoId)}>Comentar</button>
                                <div className="comments-list">
                                    {comments[videoId] && comments[videoId].map((comment, index) => (
                                        <p key={index}>{comment}</p>
                                    ))}
                                </div>
                            </div>
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