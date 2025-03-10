import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App.jsx';
import './index.css';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ErrorFallback() {
  return (
    <div className="error-container" role="alert">
      <h1>¡Oops! Algo salió mal</h1>
      <p>Por favor, intenta una de estas opciones:</p>
      <div className="error-actions">
        <button 
          onClick={() => window.location.reload()} 
          className="retry-button"
          type="button"
        >
          Recargar página
        </button>
        <button 
          onClick={() => window.location.href = '/'} 
          className="home-button"
          type="button"
        >
          Ir al inicio
        </button>
      </div>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div className="loading-container" role="status" aria-live="polite">
      <div className="spinner" aria-hidden="true" />
      <p>Cargando...</p>
      <span className="visually-hidden">Cargando aplicación, por favor espere</span>
    </div>
  );
}

function initializeApp() {
  const root = document.getElementById('root');

  if (!root) {
    console.error('Error: Elemento root no encontrado');
    return;
  }

  try {
    const rootElement = ReactDOM.createRoot(root);
    
    rootElement.render(
      <React.StrictMode>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<LoadingSpinner />}>
            <App />
          </Suspense>
        </ErrorBoundary>
      </React.StrictMode>
    );

    // Enable HMR in development
    if (import.meta.hot) {
      import.meta.hot.accept();
    }
  } catch (error) {
    console.error('Error al inicializar la aplicación:', error);
    root.innerHTML = `
      <div class="fatal-error" role="alert">
        <h1>Error de Inicialización</h1>
        <p>No se pudo cargar la aplicación. Por favor, intente más tarde.</p>
      </div>
    `;
  }
}

initializeApp();