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

import { heroVideo, heroVideoWebm, heroVideoLowRes, heroPoster } from './data/portfolio';
import { useEffect, useState } from 'react';

const Divider = () => <div className="section-divider" />;

export default function App() {
  return (
    <>
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Global background video (covers entire viewport) */}
      {heroVideo && (
        <HeroBackground
          mp4={heroVideo}
          webm={heroVideoWebm}
          lowRes={heroVideoLowRes}
          poster={heroPoster}
        />
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

function HeroBackground({ mp4, webm, lowRes, poster }) {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const onChange = () => setIsSmall(mq.matches);
    onChange();
    mq.addEventListener ? mq.addEventListener('change', onChange) : mq.addListener(onChange);
    return () => mq.removeEventListener ? mq.removeEventListener('change', onChange) : mq.removeListener(onChange);
  }, []);

  // Choose a low-res source on small screens when available
  const selectedMp4 = isSmall && lowRes ? lowRes : mp4;
  const selectedWebm = isSmall && lowRes ? lowRes.replace(/\.mp4$/i, '.webm') : webm;

  // If mobile and we have a poster but no selected video, render poster image instead
  if (isSmall && poster && !selectedMp4 && !selectedWebm) {
    return <img src={poster} alt="hero poster" className="hero-video fixed inset-0 w-full h-[45vh] object-cover" aria-hidden="true" />;
  }

  return (
    <>
      <video
        className="hero-video fixed inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={poster || undefined}
        aria-hidden="true"
      >
        {selectedWebm ? <source src={selectedWebm} type="video/webm" /> : null}
        {selectedMp4 ? <source src={selectedMp4} type="video/mp4" /> : null}
      </video>
      <div className="hero-video-overlay fixed inset-0 pointer-events-none" aria-hidden="true" />
    </>
  );
}
