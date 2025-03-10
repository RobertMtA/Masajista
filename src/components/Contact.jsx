import React, { useState } from 'react';
import { FaWhatsapp, FaTelegram, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [copied, setCopied] = useState(false);
  const phoneNumber = '+541141766377';
  const email = 'marcolisander@gmail.com';

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Resetear el estado después de 2 segundos
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const contactMethods = [
    {
      id: 'whatsapp',
      icon: <FaWhatsapp aria-hidden="true" />,
      label: 'WhatsApp',
      href: `https://wa.me/${phoneNumber.replace('+', '')}`,
      className: 'whatsapp'
    },
    {
      id: 'telegram',
      icon: <FaTelegram aria-hidden="true" />,
      label: 'Telegram',
      href: 'https://t.me/Lisander31',
      className: 'telegram'
    },
    {
      id: 'email',
      icon: <FaEnvelope aria-hidden="true" />,
      label: 'Email',
      href: `mailto:${email}`, // Corrección: usa la variable `email`
      className: 'email'
    }
  ];

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Contacto</h2>
      <p className="contact-description">
        ¡Conectemos! Elige el medio que prefieras para comunicarte conmigo.
      </p>

      <div className="contact-links" role="list">
        {contactMethods.map(({ id, icon, label, href, className }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`contact-button ${className}`}
            aria-label={`Contactar por ${label}`}
          >
            <span className="icon" aria-hidden="true">{icon}</span>
            {label}
          </a>
        ))}
      </div>

      <div className="contact-direct">
        <button
          onClick={handleCopyPhone}
          className="copy-button"
          aria-label="Copiar número de teléfono"
        >
          <FaPhone aria-hidden="true" />
          <span>{copied ? '¡Copiado!' : phoneNumber}</span>
        </button>
      </div>

      <div className="contact-hours">
        <p>Horarios de atención:</p>
        <p>Lunes a Viernes: 9:00 - 20:00</p>
        <p>Sábados: 10:00 - 15:00</p>
      </div>
    </section>
  );
}

export default Contact;