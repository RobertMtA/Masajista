import React from 'react';
import { FaInstagram, FaWhatsapp, FaTelegram, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      id: 'whatsapp',
      icon: <FaWhatsapp aria-hidden="true" />,
      label: 'Contáctanos por WhatsApp',
      url: 'https://wa.me/541141766377'
    },
    {
      id: 'telegram',
      icon: <FaTelegram aria-hidden="true" />,
      label: 'Contáctanos por Telegram',
      url: 'https://t.me/Lisander31'
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Ubicación</h3>
          <p className="location">
            <FaMapMarkerAlt aria-hidden="true" />
            <span>Buenos Aires, Argentina</span>
          </p>
          <p className="address">San Nicolas - CABA</p>
        </div>

        <div className="footer-section">
          <h3>Horarios</h3>
          <p>Lunes a Viernes: 9:00 - 20:00</p>
          <p>Sábados: 10:00 - 15:00</p>
          <p>Domingos: Cerrado</p>
        </div>

        <div className="footer-section">
          <h3>Redes Sociales</h3>
          <div className="social-links">
            {socialLinks.map(({ id, icon, label, url }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="social-link"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          © {currentYear} Lisander Masseur. Todos los derechos reservados.
        </p>
        <nav className="footer-nav" aria-label="Enlaces del pie de página">
          <a href="/privacidad">Política de Privacidad</a>
          <a href="/terminos">Términos y Condiciones</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;