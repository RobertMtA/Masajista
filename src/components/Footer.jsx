import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
return (
    <footer className="footer">
    <div className="footer-content">
        <div className="footer-section">
        <h3>Masajista & Fantasias</h3>
        <p>Cuidando tu bienestar desde 2020</p>
        </div>
        
        <div className="footer-section">
        <h3>Síguenos</h3>
        <div className="social-links">
            <a href="https://facebook.com/tuempresa" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
            </a>
            <a href="https://instagram.com/tuempresa" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
            </a>
            <a href="https://twitter.com/tuempresa" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
            </a>
        </div>
        </div>
    </div>
    
    <div className="footer-bottom">
        <p>
        Hecho con <FaHeart className="heart-icon" /> en Argentina (Buenos Aires)
        </p>
        <p>&copy; 2025 Lisandro Masajista. Todos los derechos reservados.</p>
    </div>
    </footer>
);
};

export default Footer;