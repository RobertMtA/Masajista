import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary'; // Importación correcta
import App from './App.jsx';
import './index.css';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Componente para mostrar errores
const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="error-container" role="alert">
      <h2>¡Oops! Algo salió mal</h2>
      <p className="error-message">
        {error.message || 'Se ha producido un error inesperado'}
      </p>
      <div className="error-actions">
        <button onClick={resetErrorBoundary} className="retry-button">
          Intentar de nuevo
        </button>
        <button onClick={() => window.location.reload()} className="reload-button">
          Recargar página
        </button>
      </div>
    </div>
  );
};

// Obtener el elemento root
const root = document.getElementById('root');

// Verificar si el elemento root existe
if (!root) {
  throw new Error('Root element not found. Please check your HTML file.');
}

// Renderizar la aplicación
const rootElement = ReactDOM.createRoot(root);
rootElement.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);