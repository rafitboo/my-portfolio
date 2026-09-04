const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
      
      <div className="inline-flex items-center gap-2 bg-[#35393C] border border-gray-600 text-[#A4D8FF] px-4 py-1.5 rounded-full text-xs font-semibold mb-8">
        <span className="w-2 h-2 bg-[#A4D8FF] rounded-full animate-pulse"></span>
        Currently building scalable architectures
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight max-w-4xl">
        Engineering Intelligence <br/>
        <span className="text-[#A4D8FF]">From Hardware to Cloud.</span>
      </h1>
      
      <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
        I am <strong className="text-white">Md. Rafiul Islam</strong>, a Computer Science undergraduate at BRAC University specializing in heterogeneous federated learning, embedded robotics, and full-stack system design.
      </p>

      <div className="flex flex-col sm:flex-row w-full sm:w-auto px-4 gap-4 mb-12">
        <a href="#projects" className="w-full sm:w-auto bg-[#A4D8FF] text-[#1E2124] px-8 py-3 rounded-lg font-bold hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(164,216,255,0.4)] hover:shadow-[0_0_25px_rgba(164,216,255,0.8)] hover:-translate-y-0.5">
          Explore Systems
        </a>
        <a href="#contact" className="w-full sm:w-auto bg-[#35393C] border border-gray-600 text-white px-8 py-3 rounded-lg font-bold hover:border-[#A4D8FF]/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(164,216,255,0.4)] hover:-translate-y-0.5">
          Contact Me
        </a>
      </div>

    </section>
  );
};
export default Hero;