import React, { useState, useCallback, useEffect } from 'react';
import { db } from '../firebase/firebase';
import { collection, getDocs, doc, updateDoc, getDoc } from 'firebase/firestore';
import { FaHeart } from 'react-icons/fa';
import './Gallery.css';

function Gallery() {
    const [mediaItems, setMediaItems] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [likes, setLikes] = useState({});
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState({});

    useEffect(() => {
        const loadMediaAndLikes = async () => {
            try {
                const images = [
                    { 
                        id: '1', 
                        src: '/img/img-sensible1.jpg', 
                        type: 'image',
                        alt: 'Foto Masajista 1'
                    },
                    { 
                        id: '2', 
                        src: '/img/img-sensible2.jpg', 
                        type: 'image',
                        alt: 'Foto Masajista 2'
                    },
                    { 
                        id: '3', 
                        src: '/img/img-sensible3.jpg', 
                        type: 'image',
                        alt: 'Foto Masajista 3'
                    },
                    { 
                        id: '4', 
                        src: '/img/img-sensible4.jpg', 
                        type: 'image',
                        alt: 'Foto Masajista 4'
                    },
                    { 
                        id: '5', 
                        src: '/img/img-sensible5.jpg', 
                        type: 'image',
                        alt: 'Foto Masajista 5'
                    },
                    { 
                        id: '6',
                        src: '/img/img-sensible6.jpg',
                        type: 'image',
                        alt: 'Foto Masajista 6'
                    },
                    { 
                        id: '7',
                        src: '/img/img-sensible7.jpg',
                        type: 'image',
                        alt: 'Foto Masajista 7'
                    },
                    { 
                        id: '8',
                        src: '/img/img-sensible8.jpg',
                        type: 'image',
                        alt: 'Foto Masajista 8'
                    },
                    { 
                        id: '9',
                        src: '/img/img-sensible9.jpg',
                        type: 'image',
                        alt: 'Foto Masajista 9'
                    },
                    { 
                        id: '10',
                        src: '/img/img-sensible10.jpg',
                        type: 'image',
                        alt: 'Foto Masajista 10'
                    },
                    { 
                        id: '11',
                        src: '/img/img-sensible11.jpg',
                        type: 'image',
                        alt: 'Foto Masajista 11'
                    },
                    { 
                        id: '12',
                        src: '/img/img-sensible12.jpg',
                        type: 'image',
                        alt: 'Foto Masajista 12'
                    },
                    { 
                        id: '13',
                        src: '/img/img-sensible13.jpg',
                        type: 'image',
                        alt: 'Foto Masajista 13'
                    },
                    { 
                        id: '14',
                        src: '/img/img-sensible14.jpg',
                        type: 'image',
                        alt: 'Foto Masajista 14'
                    },
                    { 
                        id: '15',
                        src: '/img/img-sensible15.jpg', // Ruta corregida
                        type: 'image',
                        alt: 'Foto Masajista 15'
                    },
                    { 
                        id: '16',
                        src: '/img/img-sensible16.jpg', // Ruta corregida
                        type: 'image',
                        alt: 'Foto Masajista 16'
                    },
                    { 
                        id: '17',
                        src: '/img/img-sensible17.jpg', // Ruta corregida
                        type: 'image',
                        alt: 'Foto Masajista 17'
                    },
                    { 
                        id: '18',
                        src: '/img/img-sensible18.jpg', // Ruta corregida
                        type: 'image',
                        alt: 'Foto Masajista 18'
                    },
                    { 
                        id: '19',
                        src: '/img/img-sensible19.jpg', // Ruta corregida
                        type: 'image',
                        alt: 'Foto Masajista 19'
                    },
                    { 
                        id: '20',
                        src: '/img/img-sensible20.jpg', // Ruta corregida
                        type: 'image',
                        alt: 'Foto Masajista 20'
                    },
                    { 
                        id: '21',
                        src: '/img/img-sensible21.jpg', // Ruta corregida
                        type: 'image',
                        alt: 'Foto Masajista 21'
                    },
                    { 
                        id: '22',
                        src: '/img/img-sensible22.jpg', // Ruta corregida
                        type: 'image',
                        alt: 'Foto Masajista 22'
                    },
                    { 
                        id: '23',
                        src: '/img/img-sensible23.jpg', // Ruta corregida
                        type: 'image',
                        alt: 'Foto Masajista 23'
                    },
                    { 
                        id: '24',
                        src: '/img/img-sensible24.jpg', // Ruta corregida
                        type: 'image',
                        alt: 'Foto Masajista 24'
                    },
                    { 
                        id: '25',
                        src: '/img/img-sensible25.jpg', // Ruta corregida
                        type: 'image',
                        alt: 'Foto Masajista 25'
                    },
                    { 
                        id: '26',
                        src: '/img/img-sensible26.jpg', // Ruta corregida
                        type: 'image',
                        alt: 'Foto Masajista 26'
                    },
                    { 
                        id: '27',
                        src: '/img/img-sensible27.jpg', // Ruta corregida
                        type: 'image',
                        alt: 'Foto Masajista 27'
                    }
                    
                ];

                const videos = [
                    { 
                        id: '16',
                        src: '/videos/video-sensible1.mp4',
                        type: 'video',
                        alt: 'Video de masajista 1'
                    },
                    { 
                        id: '17',
                        src: '/videos/video-sensible2.mp4',
                        type: 'video',
                        alt: 'Video de masajista 2'
                    },
                    { 
                        id: '18',
                        src: '/videos/video-sensible3.mp4',
                        type: 'video',
                        alt: 'Video de masajista 3'
                    },
                    { 
                        id: '19',
                        src: '/videos/video-sensible4.mp4',
                        type: 'video',
                        alt: 'Video de masajista 4'
                    },
                    { 
                        id: '20',
                        src: '/videos/video-sensible5.mp4',
                        type: 'video',
                        alt: 'Video de masajista 5'
                    },
                    { 
                        id: '21',
                        src: '/videos/video-sensible6.mp4',
                        type: 'video',
                        alt: 'Video de masajista 6'
                    },
                    { 
                        id: '22',
                        src: '/videos/video-sensible7.mp4',
                        type: 'video',
                        alt: 'Video de masajista 7'
                    },
                    { 
                        id: '23',
                        src: '/videos/video-sensible8.mp4',
                        type: 'video',
                        alt: 'Video de masajista 8'
                    },
                ];

                // Combinar ambos arreglos
                const allMedia = [...images, ...videos];

                // Cargar likes desde Firestore
                const likesDoc = await getDocs(collection(db, 'media'));
                const likesData = {};
                likesDoc.forEach(doc => {
                    likesData[doc.id] = doc.data().likes || 0;
                });

                setMediaItems(allMedia);
                setLikes(likesData);
                setLoading(false);
            } catch (error) {
                console.error('Error loading media:', error);
                setLoading(false);
            }
        };

        loadMediaAndLikes();
    }, []);

    const handleLike = useCallback(async (id) => {
        if (actionLoading[id]) return;

        try {
            setActionLoading(prev => ({ ...prev, [id]: true }));
            const mediaRef = doc(db, 'media', id);
            const mediaDoc = await getDoc(mediaRef);
            
            const currentLikes = mediaDoc.exists() ? (mediaDoc.data().likes || 0) : 0;
            const newLikes = currentLikes + 1;
            
            await updateDoc(mediaRef, { likes: newLikes });
            setLikes(prev => ({ ...prev, [id]: newLikes }));
        } catch (error) {
            console.error('Error updating likes:', error);
        } finally {
            setActionLoading(prev => ({ ...prev, [id]: false }));
        }
    }, [actionLoading]);

    const MediaCard = useCallback(({ item }) => (
        <div className="media-card">
            {item.type === 'image' ? (
                <img
                    src={item.src}
                    alt={item.alt}
                    className="gallery-image"
                    loading="lazy"
                    onClick={() => setSelectedImage(item.src)}
                    onError={(e) => {
                        console.error(`Error loading image: ${item.src}`);
                        e.target.src = '/img/placeholder.jpg'; // Ruta corregida
                    }}
                />
            ) : (
                <video
                    src={item.src}
                    controls
                    className="gallery-video"
                    loading="lazy"
                    preload="metadata"
                />
            )}
            <div className="media-actions">
                <button
                    className={`like-button ${likes[item.id] ? 'liked' : ''}`}
                    onClick={() => handleLike(item.id)}
                    disabled={actionLoading[item.id]}
                >
                    <FaHeart />
                    <span>{likes[item.id] || 0}</span>
                </button>
            </div>
        </div>
    ), [likes, actionLoading, handleLike, setSelectedImage]);

    if (loading) {
        return <div className="gallery-loading">Explorando contenido...</div>;
    }

    return (
        <section className="gallery">
            <div className="gallery-section">
                <h2>Galería de Imágenes</h2>
                <div className="gallery-grid">
                    {mediaItems
                        .filter(item => item.type === 'image')
                        .map(item => (
                            <MediaCard key={item.id} item={item} />
                        ))}
                </div>
            </div>

            <div className="gallery-section">
                <h2>Galería de Videos</h2>
                <div className="gallery-grid">
                    {mediaItems
                        .filter(item => item.type === 'video')
                        .map(item => (
                            <MediaCard key={item.id} item={item} />
                        ))}
                </div>
            </div>

            {selectedImage && (
                <div 
                    className="lightbox"
                    onClick={() => setSelectedImage(null)}
                >
                    <button 
                        className="lightbox-close"
                        onClick={() => setSelectedImage(null)}
                    >
                        ×
                    </button>
                    <img
                        src={selectedImage}
                        alt="Vista ampliada"
                        onClick={e => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
}

export default Gallery;