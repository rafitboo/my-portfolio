import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="bg-[#35393C]/90 backdrop-blur-md border border-gray-600 rounded-full p-1.5 flex items-center justify-between w-full max-w-3xl shadow-xl relative">
        
        {/* Logo */}
        <Link 
          to="/" 
          onClick={() => setIsOpen(false)}
          className={`text-lg font-bold tracking-wider px-4 py-2 transition-all duration-300 hardware-glitch ${
            location.pathname === '/' 
              ? 'text-white drop-shadow-[0_0_10px_rgba(164,216,255,0.8)]' 
              : 'text-white hover:text-[#A4D8FF] hover:drop-shadow-[0_0_10px_rgba(164,216,255,0.8)]'
          }`}
        >
          @rafitboo
        </Link>
        
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-1 relative">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-[#1E2124] border border-[#A4D8FF]/30 shadow-[0_0_15px_rgba(164,216,255,0.3)] z-0"
                    style={{ borderRadius: 9999 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Desktop Resume & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 pr-2">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noreferrer" 
            className="hidden md:flex items-center gap-2 bg-[#A4D8FF] hover:bg-white text-[#1E2124] px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 shadow-[0_0_15px_rgba(164,216,255,0.4)] hover:shadow-[0_0_25px_rgba(164,216,255,0.8)] hover:-translate-y-0.5"
          >
            Resume 
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </a>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white p-2 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 bg-[#1E2124] border border-gray-600 rounded-2xl p-4 shadow-2xl flex flex-col gap-2 md:hidden"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl font-bold transition-colors ${
                    isActive ? 'bg-[#35393C] text-[#A4D8FF]' : 'text-gray-300 hover:bg-[#35393C] hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="mt-2 flex justify-center items-center gap-2 bg-[#A4D8FF] text-[#1E2124] px-4 py-3 rounded-xl font-bold"
            >
              View Resume
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;