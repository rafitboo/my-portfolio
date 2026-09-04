import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import CustomCursor from './components/CustomCursor';
import { playTransitionBeep } from './utils/sound';

const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <FAQ />
    </>
  );
};

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="relative z-10"
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    playTransitionBeep();
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative cursor-none">
        <ParticlesBackground />
        
        {/* Global Custom Cursor */}
        <CustomCursor />
        
        <Navbar />
        
        <div className="flex-grow overflow-hidden relative z-10">
          <AnimatedRoutes />
        </div>

        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;