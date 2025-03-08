import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import './morphing-dialog.css';

export const MorphingDialog = ({ children, transition, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsAnimating(false);
      onClose?.();
    }, (transition?.duration || 300));
  };

  return (
    <div>
      <div 
        onClick={() => setIsOpen(true)} 
        className="morphing-dialog-trigger"
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === 'Enter' && setIsOpen(true)}
      >
        {children}
      </div>
      {isOpen && (
        <div
          className={`morphing-dialog ${isOpen ? 'open' : ''} ${isAnimating ? 'closing' : ''}`}
          style={{
            transition: `all ${transition?.duration || 300}ms ${transition?.ease || 'cubic-bezier(0.4, 0, 0.2, 1)'}`,
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="morphing-dialog-backdrop" onClick={handleClose} />
          <div className="morphing-dialog-container">
            <div className={`morphing-dialog-content ${isOpen ? 'open' : ''}`}>
              {children}
            </div>
            <MorphingDialogClose onClick={handleClose} />
          </div>
        </div>
      )}
    </div>
  );
};

export const MorphingDialogTrigger = ({ children, className }) => {
  return (
    <div className={`morphing-dialog-trigger ${className || ''}`} role="button" tabIndex={0}>
      {children}
    </div>
  );
};

export const MorphingDialogContent = ({ children, className }) => {
  return (
    <div className={`morphing-dialog-content ${className || ''}`}>
      {children}
    </div>
  );
};

export const MorphingDialogClose = ({ onClick, variants }) => {
  return (
    <button
      onClick={onClick}
      className="morphing-dialog-close"
      aria-label="Close dialog"
      style={{
        opacity: variants?.initial?.opacity || 1,
        transition: `all ${variants?.animate?.transition?.duration || 300}ms ${variants?.animate?.transition?.ease || 'cubic-bezier(0.4, 0, 0.2, 1)'}`,
      }}
    >
      <X className="h-5 w-5 text-zinc-500" />
    </button>
  );
};

export const MorphingDialogImage = ({ src, alt, className }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`morphing-dialog-image ${className || ''}`}
      loading="lazy"
    />
  );
};

export const MorphingDialogContainer = ({ children, className }) => {
  return (
    <div className={`morphing-dialog-container ${className || ''}`}>
      {children}
    </div>
  );
};