import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { 
  About, 
  Contact, 
  Experience, 
  Hero, 
  Navbar, 
  Tech, 
  Works, 
  Certifications, 
  StarsCanvas,
  ParticleBackground,
  LoadingScreen,
  FloatingActionButton
} from "./components";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* Loading Screen */}
        {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
        
        {/* Floating Action Button */}
        <FloatingActionButton />
        
        <div className='relative z-0 bg-primary'>
          {/* Hero Section with Particle Background */}
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center relative'>
            <ParticleBackground />
            <Navbar />
            <Hero />
          </div>
          
          <About />
          <Experience />
          <Tech />
          <Works />
          <Certifications />
          
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
