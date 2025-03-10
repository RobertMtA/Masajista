import React from 'react';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="error-fallback">
      <h2>Algo salió mal</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Intentar nuevamente</button>
    </div>
  );
}

export default ErrorFallback;