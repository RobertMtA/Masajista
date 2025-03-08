import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './styles/App.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found. Please check your HTML file.');
}

const renderApp = () => {
  const rootElement = ReactDOM.createRoot(root);
  
  rootElement.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// Handle rendering errors
try {
  renderApp();
} catch (error) {
  console.error('Error rendering the application:', error);
  
  // Show a user-friendly error message
  if (root) {
    root.innerHTML = `
      <div style="text-align: center; padding: 2rem;">
        <h1>¡Oops! Algo salió mal</h1>
        <p>Por favor, recarga la página o intenta más tarde.</p>
      </div>
    `;
  }
}

// Enable hot reloading in development
if (import.meta.hot) {
  import.meta.hot.accept();
}