const Experience = () => {
  const experienceData = [
    {
      id: 1,
      role: "Undergraduate Student Tutor (ST)",
      company: "Department of CSE, BRAC University",
      location: "Dhaka, Bangladesh",
      date: "Mar 2026 – May 2026",
      description: "Appointed as a Student Tutor — a merit-based role equivalent to Teaching Assistant. Led structured consultation sessions for 26 students, helping them grasp core course concepts and prepare for assignments, quizzes, and exams, while collaborating closely with faculty to align tutoring with course objectives and improve learning outcomes."
    }
  ];

  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-24">
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-white mb-4 border-l-4 border-[#A4D8FF] pl-4">Professional Experience</h2>
      </div>

      <div className="relative">
        {/* The Center Vertical Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-700"></div>

        <div className="space-y-12">
          {experienceData.map((exp, index) => {
            // Determine if the card should be on the left or right (for desktop)
            const isLeft = index % 2 === 0;

            return (
              <div key={exp.id} className={`relative flex flex-col md:flex-row items-center ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
                
                {/* Mobile Date & Desktop Center Dot */}
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center mb-4 md:mb-0 z-10 w-full md:w-auto">
                  <div className="hidden md:block w-4 h-4 rounded-full bg-[#A4D8FF] border-4 border-[#1E2124] shadow-[0_0_10px_rgba(164,216,255,0.5)]"></div>
                  <div className="md:hidden bg-[#1E2124] border border-gray-600 text-[#A4D8FF] px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                    {exp.date}
                  </div>
                </div>

                {/* The Content Card */}
                <div className={`w-full md:w-[45%] ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-[#35393C] rounded-2xl p-8 border border-gray-700/50 hover:border-[#A4D8FF]/40 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(164,216,255,0.2)] hover:-translate-y-1">
                    
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="text-[#A4D8FF] font-semibold text-lg mb-2">{exp.company}</h4>
                    
                    <div className="flex justify-between items-center text-sm text-gray-500 font-medium mb-6">
                      <span>{exp.location}</span>
                      <span className="hidden md:block text-gray-400 border border-gray-600 bg-[#1E2124] px-3 py-1 rounded-full">{exp.date}</span>
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;