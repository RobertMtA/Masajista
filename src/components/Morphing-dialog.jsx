import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import './Morphing-dialog.css';

function MorphingDialog({ isOpen, onClose, children, title }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        const handleClickOutside = (e) => {
            if (dialogRef.current && !dialogRef.current.contains(e.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose]);

    const dialogVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 20
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 25,
                stiffness: 300
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: 20,
            transition: {
                duration: 0.2
            }
        }
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="dialog-container" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
                    <motion.div
                        className="dialog-overlay"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    />
                    <motion.div
                        ref={dialogRef}
                        className="dialog-content"
                        variants={dialogVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="dialog-header">
                            <h2 id="dialog-title">{title}</h2>
                            <button
                                className="close-button"
                                onClick={onClose}
                                aria-label="Cerrar diálogo"
                            >
                                <FaTimes />
                            </button>
                        </div>
                        <div className="dialog-body">
                            {children}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

MorphingDialog.defaultProps = {
    title: 'Diálogo',
    isOpen: false,
    onClose: () => {}
};

export default MorphingDialog;