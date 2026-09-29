import React from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Background from './components/Background';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative min-h-screen bg-bg text-muted font-sans">
        <Background />
        <Header />
        <main>
          <Home />
          <About />
          <Projects />
          <Services />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LazyMotion>
  );
}

export default App;
