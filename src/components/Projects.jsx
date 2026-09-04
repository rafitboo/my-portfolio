const Projects = () => {
  const projects = [
    {
      _id: "6a9a967285219a48c8da7d3b",
      title: "AI Research Assistant",
      description: "An intelligent, decoupled full-stack web application designed to help researchers and supervisors manage academic literature, collaborate, and leverage AI to accelerate literature reviews.",
      techStack: ["Flask", "FastAPI", "PostgreSQL", "Supabase", "Gemini API", "Tailwind CSS"],
      githubLink: "https://github.com/rafitboo/ai-research-assistant.git",
      liveLink: "https://ai-research-assistant-theta-nine.vercel.app/",
      image: "/ai-research.png"
    },
    {
      _id: "6a9a967285219a48c8da7d3c",
      title: "MediCare",
      description: "A comprehensive online pharmacy platform providing a multi-user environment for customers, staff, and admins to manage inventory, secure checkout via bKash/COD, and real-time support.",
      techStack: ["Python", "Flask", "MySQL", "SQLAlchemy", "JavaScript"],
      githubLink: "https://github.com/rafitboo/Medicare.git",
      liveLink: "",
      image: "/medicare.png"
    },
    {
      _id: "6a9a967285219a48c8da7d3d",
      title: "ZK Network",
      description: "A secure, encrypted messaging platform featuring Server-Trusted Key Escrow and Hybrid Asymmetric Cryptography (RSA/ECC) built entirely from mathematical primitives to ensure zero plaintext data at rest.",
      techStack: ["Python", "Django", "SQLite3", "Custom Cryptography", "Bootstrap 5"],
      githubLink: "https://github.com/rafitboo/Zero-Knowledge.git",
      liveLink: "",
      image: "/zk.png"      
    },
    {
      _id: "6a9a967285219a48c8da7d3e",
      title: "TRAIM - 3D Aim Trainer",
      description: "A comprehensive 3D aim trainer featuring dynamic game modes, customizable environments, diverse weapon mechanics, and detailed performance tracking for accuracy and reaction time.",
      techStack: ["Python", "PyOpenGL", "GLUT"],
      githubLink: "https://github.com/rafitboo/CSE423-Computer-Graphics.git",
      liveLink: "",
      image: "/traim.png"
    }
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-24">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-white mb-4 border-l-4 border-[#A4D8FF] pl-4">Engineered Systems</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project._id} className="bg-[#35393C] rounded-2xl overflow-hidden flex flex-col border border-gray-700/50 hover:border-[#A4D8FF]/40 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(164,216,255,0.25)] group">
            
            {/* Project Image Container */}
            <div className="w-full h-56 bg-[#1E2124] border-b border-gray-700/50 relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Content Section */}
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-1">{project.description}</p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="bg-[#1E2124] text-[#A4D8FF] text-xs font-bold px-3 py-1 rounded-md border border-gray-600/50 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#A4D8FF] hover:text-white text-sm font-bold transition-colors">
                    View Repository <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                )}
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-bold transition-colors">
                    Live Demo <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;