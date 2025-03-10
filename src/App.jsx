import React, { Suspense, lazy, useState, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Navbar from './components/Navbar';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorFallback from './components/ErrorFallback';
import './styles/App.css';

// Lazy load components with retry mechanism
const retryLoadComponent = (fn, retriesLeft = 3) =>
  new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            reject(error);
            return;
          }
          retryLoadComponent(fn, retriesLeft - 1).then(resolve, reject);
        }, 1500);
      });
  });

const Hero = lazy(() => retryLoadComponent(() => import('./components/Hero')));
const Services = lazy(() => retryLoadComponent(() => import('./components/Services')));
const Gallery = lazy(() => retryLoadComponent(() => import('./components/Gallery')));
const Contact = lazy(() => retryLoadComponent(() => import('./components/Contact')));
const Footer = lazy(() => retryLoadComponent(() => import('./components/Footer')));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for necessary resources
    Promise.all([
      Hero,
      Services,
      Gallery,
      Contact,
      Footer
    ]).then(() => {
      setIsLoading(false);
    }).catch(error => {
      console.error('Error loading components:', error);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Navbar />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Hero />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Services />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Gallery />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;