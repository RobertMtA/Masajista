import React from 'react';
import { FaWhatsapp, FaTelegram, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
return (
    <section id="contact" className="contact">
    <h2>Contacto</h2>
    <p className="contact-description">
        ¡Conectemos! Elige el medio que prefieras para comunicarte conmigo.
    </p>
    <div className="contact-links">
        <a 
        href="https://wa.me/+541141766377" 
        target="_blank" 
        rel="noopener noreferrer"
        className="contact-button whatsapp"
        >
        <FaWhatsapp className="icon" />
        WhatsApp
        </a>
        <a 
        href="https://t.me/Lisander31" 
        target="_blank" 
        rel="noopener noreferrer"
        className="contact-button telegram"
        >
        <FaTelegram className="icon" />
        Telegram
        </a>
        <a 
        href="mailto:marcolisander@gmail.com" 
        className="contact-button email"
        >
        <FaEnvelope className="icon" />
        Email
        </a>
    </div>
    </section>
);
};

export default Contact;