const About = () => {
  // Categorized skills tailored to your stack
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "Python", "C++", "SQL"]
    },
    {
      title: "Frontend",
      skills: ["React", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Flask", "FastAPI", "Django"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLite3"]
    },
    {
      title: "AI & Hardware",
      skills: ["PyTorch", "Machine Learning", "Arduino", "IoT Sensors"]
    },
    {
      title: "Tools & Concepts",
      skills: ["Git", "GitHub", "REST APIs", "Cisco Packet Tracer"]
    }
  ];

  return (
    <section id="about-page" className="max-w-6xl mx-auto px-4 py-24">
      
      {/* 1. About Me Section */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-white mb-8 border-b-4 border-[#A4D8FF] pb-2 inline-block">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1 space-y-6 text-gray-400 leading-relaxed text-lg">
            <p>
              I am <strong className="text-white">Md. Rafiul Islam</strong>, a Computer Science & Engineering (CSE) undergraduate at BRAC University in Dhaka, Bangladesh. I am focused on engineering robust, decoupled systems that span from hardware integrations to scalable cloud architectures.
            </p>
            <p>
              My work centers on solving complex problems across multiple domains. Whether I am building full-stack web applications with the MERN stack, designing privacy-preserving federated learning pipelines with PyTorch, or programming embedded microcontrollers for automated robotics, I prioritize clean architecture and efficient data flow.
            </p>
            <p>
              Beyond independent research and development, I am passionate about technical education. I have served as an Undergraduate Student Tutor and Machine Learning Instructor, helping peers grasp core algorithmic concepts—which in turn keeps my own foundational engineering skills sharp.
            </p>
            
            <div className="pt-4 flex gap-4">
              <a href="/contact" className="bg-[#A4D8FF] hover:bg-white text-[#1E2124] px-6 py-2.5 rounded-lg font-bold transition-all duration-300 shadow-[0_0_15px_rgba(164,216,255,0.4)] hover:shadow-[0_0_25px_rgba(164,216,255,0.8)] hover:-translate-y-0.5">
                Get in touch
              </a>
              <a href="/resume.pdf" target="_blank" className="bg-[#35393C] border border-gray-600 hover:border-[#A4D8FF]/50 text-white px-6 py-2.5 rounded-lg font-bold transition-all duration-300 hover:shadow-[0_0_15px_rgba(164,216,255,0.4)] hover:-translate-y-0.5">
                View Resume
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-64 h-64 bg-[#1E2124] border border-gray-700 rounded-2xl overflow-hidden shadow-xl">
                <img 
                src="/photo.jpg" 
                alt="Md. Rafiul Islam" 
                className="w-full h-full object-cover"
                />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Skills & Technologies Grid */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-white mb-8">Skills & Technologies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-[#35393C] border border-gray-700/50 rounded-xl p-6 hover:border-[#A4D8FF]/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(164,216,255,0.2)]">
              <h4 className="text-xl font-bold text-white mb-4">{category.title}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="bg-[#1E2124] text-[#A4D8FF] text-xs font-bold px-3 py-1.5 rounded-md border border-gray-600/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Education Section */}
      <div>
        <h3 className="text-3xl font-bold text-white mb-8">Education</h3>
        <div className="space-y-4">
          
          {/* BRAC University */}
          <div className="bg-[#35393C] border border-gray-700/50 rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center hover:border-[#A4D8FF]/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(164,216,255,0.2)]">
            <div>
              <h4 className="text-2xl font-bold text-white mb-1">BRAC University</h4>
              <p className="text-[#A4D8FF] font-medium mb-1">Bachelor of Science in Computer Science and Engineering</p>
              <p className="text-gray-300 font-medium mb-2">CGPA: 3.93 out of 4.00</p>
              <p className="text-gray-400 text-sm">Dhaka, Bangladesh</p>
            </div>
            <div className="mt-4 md:mt-0 text-right md:text-right w-full md:w-auto">
              <span className="inline-block bg-[#1E2124] border border-gray-600 text-gray-300 px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                Expected Sep 2026
              </span>
            </div>
          </div>

          {/* HSC */}
          <div className="bg-[#35393C] border border-gray-700/50 rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center hover:border-[#A4D8FF]/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(164,216,255,0.2)]">
            <div>
              <h4 className="text-2xl font-bold text-white mb-1">Birshreshtha Munshi Abdur Rouf Public College</h4>
              <p className="text-[#A4D8FF] font-medium mb-1">HSC - Higher Secondary Certificate (Science)</p>
              <p className="text-gray-300 font-medium mb-2">GPA: 5.00 out of 5.00</p>
              <p className="text-gray-400 text-sm">Dhaka, Bangladesh</p>
            </div>
            <div className="mt-4 md:mt-0 text-right md:text-right w-full md:w-auto">
               <span className="inline-block bg-[#1E2124] border border-gray-600 text-gray-300 px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                Jun 2019 – Dec 2021
              </span>
            </div>
          </div>

          {/* SSC */}
          <div className="bg-[#35393C] border border-gray-700/50 rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center hover:border-[#A4D8FF]/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(164,216,255,0.2)]">
            <div>
              <h4 className="text-2xl font-bold text-white mb-1">Birshreshtha Munshi Abdur Rouf Public College</h4>
              <p className="text-[#A4D8FF] font-medium mb-1">SSC - Secondary School Certificate (Science)</p>
              <p className="text-gray-300 font-medium mb-2">GPA: 4.83 out of 5.00</p>
              <p className="text-gray-400 text-sm">Dhaka, Bangladesh</p>
            </div>
            <div className="mt-4 md:mt-0 text-right md:text-right w-full md:w-auto">
               <span className="inline-block bg-[#1E2124] border border-gray-600 text-gray-300 px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                Jan 2017 – Feb 2019
              </span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default About;