import { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);
  const email = "rafit991@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const faqs = [
    {
      question: "Who is Md. Rafiul Islam?",
      answer: "I am a Computer Science & Engineering (CSE) undergraduate at BRAC University in Dhaka, Bangladesh. I specialize in building scalable full-stack web applications, heterogeneous machine learning models, and embedded robotics systems."
    },
    {
      question: "Are you available for new opportunities?",
      answer: "Yes, I am actively open to research collaborations, software engineering internships, and freelance development roles where I can apply my skills in AI, backend architecture, and full-stack development."
    },
    {
      question: "What technologies and skills do you specialize in?",
      answer: "My stack includes the MERN stack, Flask, FastAPI, Python, PyTorch, MongoDB, PostgreSQL, and hardware integrations using microcontrollers like Arduino."
    },
    {
      question: "What kind of projects have you built?",
      answer: "I have built systems like 'Safe-Passage' (an automated hardware evacuation system), privacy-preserving federated learning pipelines, secure encrypted messaging platforms (ZK Network), and full-stack applications like MediCare and AI Research Assistant."
    },
    {
      question: "How can I contact you for a project?",
      answer: "You can copy my email directly above, connect via LinkedIn, or check out my repositories on GitHub."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="contact-page" className="max-w-5xl mx-auto px-4 py-24">
      
      <div className="mb-12 text-center md:text-left">
        <span className="text-[#A4D8FF] font-bold tracking-wider text-sm uppercase mb-2 block">Contact</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h2>
        <p className="text-gray-400 text-lg">
          Looking to collaborate on a system, or have a role to fill? Pick whichever channel suits you best.
        </p>
      </div>

      {/* Main CTA Card */}
      <div className="bg-[#35393C] border border-gray-700/50 rounded-2xl p-8 md:p-12 mb-8 shadow-xl">
        <div className="inline-flex items-center gap-2 bg-green-900/30 border border-green-800/50 text-green-400 px-3 py-1.5 rounded-full text-xs font-bold mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Available for freelance & remote work
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's build something together</h3>
        <p className="text-gray-400 mb-8 max-w-2xl text-lg">
          Whether you have a hardware project in mind, a backend architecture to design, or just want to connect — drop me a line. I read every message and usually reply within a day.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={handleCopy}
            className="flex items-center gap-2 bg-[#A4D8FF] hover:bg-white text-[#1E2124] px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-[0_0_15px_rgba(164,216,255,0.4)] hover:shadow-[0_0_25px_rgba(164,216,255,0.8)] hover:-translate-y-0.5"
          >
            {copied ? (
              <>Copied! <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></>
            ) : (
              <>Copy Email <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></>
            )}
          </button>
          
          <a href="/resume.pdf" target="_blank" className="flex items-center gap-2 bg-[#1E2124] border border-gray-600 hover:border-[#A4D8FF]/50 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:shadow-[0_0_15px_rgba(164,216,255,0.4)] hover:-translate-y-0.5">
            View Resume <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
        
        {/* Email */}
        <div className="bg-[#35393C] border border-gray-700/50 rounded-xl p-6 flex items-center gap-4 hover:border-[#A4D8FF]/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(164,216,255,0.2)]">
          <div className="w-12 h-12 bg-[#1E2124] rounded-lg flex items-center justify-center text-[#A4D8FF]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </div>
          <div>
            <p className="text-gray-500 text-xs font-bold tracking-wider uppercase mb-1">Email</p>
            <p className="text-white font-medium">{email}</p>
          </div>
        </div>

        {/* LinkedIn */}
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="bg-[#35393C] border border-gray-700/50 rounded-xl p-6 flex items-center gap-4 hover:border-[#A4D8FF]/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(164,216,255,0.2)]">
          <div className="w-12 h-12 bg-[#1E2124] rounded-lg flex items-center justify-center text-[#A4D8FF]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </div>
          <div>
            <p className="text-gray-500 text-xs font-bold tracking-wider uppercase mb-1">LinkedIn</p>
            <p className="text-white font-medium">LinkedIn Profile</p>
          </div>
        </a>

        {/* GitHub */}
        <a href="https://github.com/rafitboo" target="_blank" rel="noreferrer" className="bg-[#35393C] border border-gray-700/50 rounded-xl p-6 flex items-center gap-4 hover:border-[#A4D8FF]/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(164,216,255,0.2)]">
          <div className="w-12 h-12 bg-[#1E2124] rounded-lg flex items-center justify-center text-[#A4D8FF]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </div>
          <div>
            <p className="text-gray-500 text-xs font-bold tracking-wider uppercase mb-1">GitHub</p>
            <p className="text-white font-medium">GitHub Profile</p>
          </div>
        </a>

        {/* Location */}
        <div className="bg-[#35393C] border border-gray-700/50 rounded-xl p-6 flex items-center gap-4 hover:border-[#A4D8FF]/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(164,216,255,0.2)]">
          <div className="w-12 h-12 bg-[#1E2124] rounded-lg flex items-center justify-center text-[#A4D8FF]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          </div>
          <div>
            <p className="text-gray-500 text-xs font-bold tracking-wider uppercase mb-1">Location</p>
            <p className="text-white font-medium">Dhaka, Bangladesh</p>
            <p className="text-gray-400 text-xs mt-1">Available remotely worldwide</p>
          </div>
        </div>

      </div>

      {/* Frequently Asked Questions Section */}
      <div className="mb-12 text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 border-b-4 border-[#A4D8FF] pb-2 inline-block">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div 
              key={index} 
              className={`bg-[#35393C] border rounded-xl overflow-hidden transition-all duration-300 ${
                isOpen ? 'border-[#A4D8FF]/50 shadow-[0_0_15px_rgba(164,216,255,0.2)]' : 'border-gray-700/50 hover:border-gray-500 hover:shadow-[0_0_10px_rgba(255,255,255,0.05)]'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
              >
                <span className={`font-bold text-lg ${isOpen ? 'text-[#A4D8FF]' : 'text-white'}`}>
                  {faq.question}
                </span>
                
                <svg 
                  className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#A4D8FF]' : 'text-gray-400'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-400 leading-relaxed border-t border-gray-700/50 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default Contact;