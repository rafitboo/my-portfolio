import { useState } from 'react';

export const faqs = [
  {
    question: "Who is Md. Rafiul Islam?",
    answer: "I am a Computer Science & Engineering (CSE) undergraduate at BRAC University in Dhaka, Bangladesh. I specialize in building scalable full-stack web applications, heterogeneous machine learning models, and embedded robotics systems."
  },
  {
    question: "What technologies and skills do you specialize in?",
    answer: "My stack is diverse. For web development, I build with the MERN stack (MongoDB, Express, React, Node.js), Flask, and FastAPI. For AI and machine learning, I utilize Python and PyTorch. I also engineer hardware circuits using microcontrollers like Arduino, and design enterprise network topologies using Cisco Packet Tracer."
  },
  {
    question: "What kind of projects have you engineered?",
    answer: "I have built a wide range of systems spanning multiple domains. This includes 'Safe-Passage' (an automated hardware evacuation system), privacy-preserving federated learning pipelines, secure encrypted messaging platforms (ZK Network), and robust full-stack applications like MediCare."
  },
  {
    question: "What are some of your favorite TV series?",
    answer: "I'm a big fan of gripping character studies, gritty dramas, and thrillers. Some of my absolute favorites include Breaking Bad, Better Call Saul, Game of Thrones, and All of Us Are Dead."
  },
  {
    question: "What are your go-to movies?",
    answer: "I enjoy deep storytelling, emotional depth, and atmospheric tension. My favorites range from Manchester by the Sea and Se7en to the cinematic masterpiece that is The Lord of the Rings trilogy."
  },
  {
    question: "What musician or bands are usually playing while you code?",
    answer: "My coding playlists are heavily leaning towards alternative R&B, indie, and atmospheric vibes. I regularly listen to Joji, The Weeknd, Tame Impala, Frank Ocean, and The Strokes."
  },
  {
    question: "Are you available for new opportunities?",
    answer: "Yes, I am actively open to research collaborations, software engineering internships, and freelance development roles where I can apply my skills in AI, backend architecture, and full-stack development."
  },
  {
    question: "How can I contact you for a project or research?",
    answer: "You can reach out to me directly via the social links in the Hero section or through the terminal, or connect with me on LinkedIn and GitHub to view my latest repositories and research work."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="max-w-4xl mx-auto px-4 py-24">
      <div className="mb-12 text-center flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white mb-4 border-b-4 border-[#A4D8FF] pb-2 inline-block">
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

export default FAQ;