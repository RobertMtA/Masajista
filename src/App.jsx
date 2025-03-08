import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import LoadingSpinner from './components/LoadingSpinner';
import './styles/App.css';

// Lazy load components for better performance
const Hero = lazy(() => import('./components/Hero'));
const Services = lazy(() => import('./components/Services'));
const Gallery = lazy(() => import('./components/Gallery'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
          <Services />
          <Gallery />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;