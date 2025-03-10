import React, { useState, useEffect, useCallback } from 'react';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);

    const sections = ['home', 'services', 'gallery', 'contact'];
    const currentSection = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });

    if (currentSection) {
      setActiveSection(currentSection);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navLinks = [
    { href: '#home', text: 'Inicio' },
    { href: '#services', text: 'Servicios' },
    { href: '#gallery', text: 'Galería' },
    { href: '#contact', text: 'Contacto' }
  ];

  return (
    <nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      role="navigation"
      aria-label="Menú principal"
    >
      <div className="navbar-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          <img 
            src="/img/logo.jpg" 
            alt="Lisander Masseur Logo" 
            width="50" 
            height="50"
            className="logo-img" 
          />
        </a>

        <button 
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul 
          id="nav-menu"
          className={`nav-links ${isMenuOpen ? 'active' : ''}`}
          role="menubar"
        >
          {navLinks.map(({ href, text }) => (
            <li key={href} role="none">
              <a
                href={href}
                onClick={closeMenu}
                className={activeSection === href.slice(1) ? 'active' : ''}
                role="menuitem"
              >
                {text}
              </a>
            </li>
          ))}
        </ul>

        <a 
          href="https://wa.me/541141766377"
          className="contact-button"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
        >
          <FaWhatsapp />
          <span>Contactar</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;