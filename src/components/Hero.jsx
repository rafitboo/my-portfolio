// src/components/Hero.jsx
import Terminal from './Terminal';
import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 pt-32 sm:pt-36 lg:pt-28 pb-16 sm:pb-20 lg:pb-24"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Bold Text Content */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          
          {/* Status Badge with balanced top clearance */}
          <div className="inline-flex items-center justify-center lg:justify-start gap-2 bg-[#35393C] border border-gray-600 text-[#A4D8FF] px-4 py-2 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-6 sm:mb-8 w-fit mx-auto lg:mx-0 shadow-md">
            <span className="w-2.5 h-2.5 bg-[#A4D8FF] rounded-full animate-pulse"></span>
            Currently building scalable architectures
          </div>

          {/* Responsive Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.15] sm:leading-tight mb-6 tracking-tight">
            Engineering Intelligence. <br />
            <span className="text-[#A4D8FF]">From Hardware to Software to Systems to AI.</span>
          </h1>
          
          {/* Paragraph Copy with balanced spacing */}
          <p className="text-gray-200 font-semibold text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            I am <strong className="text-[#A4D8FF] font-black drop-shadow-[0_0_12px_rgba(164,216,255,0.4)]">Md. Rafiul Islam</strong>, a Computer Science undergraduate at BRAC University specializing in heterogeneous federated learning, embedded robotics, and full-stack system design.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-5 mb-8 lg:mb-0">
            <a 
              href="#projects" 
              className="w-full sm:w-auto text-center bg-[#A4D8FF] text-[#1E2124] px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl font-black text-base hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(164,216,255,0.4)] hover:shadow-[0_0_30px_rgba(164,216,255,0.8)] hover:-translate-y-0.5"
            >
              Explore Systems
            </a>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto text-center bg-[#35393C] border border-gray-500 text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl font-black text-base hover:border-[#A4D8FF]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(164,216,255,0.4)] hover:-translate-y-0.5"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Side: Interactive Terminal */}
        <div className="w-full hidden md:block">
          <Terminal />
        </div>

      </div>
    </section>
  );
}