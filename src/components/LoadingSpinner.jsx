import React from 'react';
import './LoadingSpinner.css';

function LoadingSpinner({ size = 'medium', color = 'primary' }) {
  return (
    <div 
      className={`loading-spinner ${size} ${color}`}
      role="status"
      aria-live="polite"
    >
      <div className="spinner-circle"></div>
      <div className="spinner-inner"></div>
      <span className="visually-hidden">Cargando contenido...</span>
    </div>
  );
}

LoadingSpinner.defaultProps = {
  size: 'medium',
  color: 'primary'
};

export default LoadingSpinner;