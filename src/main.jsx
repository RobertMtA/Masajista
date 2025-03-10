import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App.jsx';
import './index.css';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ErrorFallback({ error, resetErrorBoundary }) {
  const handleReset = () => {
    try {
      resetErrorBoundary();
    } catch (e) {
      window.location.href = '/';
    }
  };

  return (
    <div className="error-container" role="alert">
      <h2>¡Oops! Algo salió mal</h2>
      <p className="error-message">
        {error?.message || 'Se ha producido un error inesperado'}
      </p>
      {process.env.NODE_ENV === 'development' && (
        <pre className="error-stack">
          {error?.stack}
        </pre>
      )}
      <div className="error-actions">
        <button 
          onClick={handleReset} 
          className="retry-button"
          aria-label="Intentar de nuevo"
          type="button"
        >
          Intentar de nuevo
        </button>
        <button 
          onClick={() => window.location.href = '/'} 
          className="reload-button"
          aria-label="Volver al inicio"
          type="button"
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div 
      className="loading-container" 
      role="status" 
      aria-live="polite"
    >
      <div className="loading-spinner" aria-hidden="true" />
      <p className="loading-text">Cargando aplicación...</p>
      <span className="visually-hidden">
        Por favor espere mientras se carga la aplicación
      </span>
    </div>
  );
}

function logError(error, errorInfo) {
  console.error('Error en la aplicación:', error);
  console.error('Información adicional:', errorInfo);
}

function initializeApp() {
  const root = document.getElementById('root');

  if (!root) {
    throw new Error('No se encontró el elemento root. Verifique su archivo HTML.');
  }

  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ErrorBoundary 
        FallbackComponent={ErrorFallback}
        onError={logError}
        onReset={() => {
          sessionStorage.clear();
          localStorage.clear();
          window.location.href = '/';
        }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </React.StrictMode>
  );
}

initializeApp();