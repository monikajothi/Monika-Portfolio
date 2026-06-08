// src/App.jsx
import Navbar           from './components/layout/Navbar';
import Footer           from './components/layout/Footer';
import Hero             from './components/sections/Hero';
import About            from './components/sections/About';
import Skills           from './components/sections/Skills';
import Experience       from './components/sections/Experience';
import Projects         from './components/sections/Projects';
import Extracurricular  from './components/sections/Extracurricular';
import Certifications   from './components/sections/Certifications';
import Achievements     from './components/sections/Achievements';
import Education       from './components/sections/Education';
import Contact          from './components/sections/Contact';

import { heroVideo } from './data/portfolio';

const Divider = () => <div className="section-divider" />;

export default function App() {
  return (
    <>
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Global background video (covers entire viewport) */}
      {heroVideo && (
        <>
          <video
            className="hero-video fixed inset-0 w-full h-full object-cover"
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
          <div className="hero-video-overlay fixed inset-0 pointer-events-none" aria-hidden="true" />
        </>
      )}

      <main className="relative z-10">
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Education />
        <Divider />
        <Certifications />
        <Divider />
        <Achievements />
        <Divider />
        <Extracurricular />
        <Divider />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
