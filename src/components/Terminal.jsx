import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { playTypeBeep, playButtonClick } from '../utils/sound';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { command: '', output: "Type 'help' to see available commands." }
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [history]);

  const quotes = [
    "“Talk is cheap. Show me the code.” – Linus Torvalds",
    "“First, solve the problem. Then, write the code.” – John Johnson",
    "“Experience is the name everyone gives to their mistakes.” – Oscar Wilde",
    "“Make it work, make it right, make it fast.” – Kent Beck",
    "“The most disastrous thing that you can ever learn is your first programming language.” – Alan Kay"
  ];

  const handleInputChange = (e) => {
    setInput(e.target.value);
    playTypeBeep(); // Trigger synthetic audio click on keystroke
  };

  const handleCommand = (e) => {
    e.preventDefault();
    playButtonClick();
    const cmd = input.trim().toLowerCase();
    let output = '';

    switch (cmd) {
      case 'help':
        output = 'Available commands: about, skills, ping, quote, date, whoami, clear\nSocials: github, linkedin, fb, ig';
        break;
      case 'about':
        output = 'Md. Rafiul Islam. Engineering Intelligence From Hardware to Cloud.';
        break;
      case 'skills':
        output = '[LOADED]: MERN Stack, Flask, FastAPI, PyTorch, Arduino, Cisco Packet Tracer.';
        break;
      case 'ping':
      case 'ping router-unit-1':
        output = 'Pinging 192.168.1.1 with 32 bytes of data...\nReply from 192.168.1.1: bytes=32 time<1ms TTL=64\nReply from 192.168.1.1: bytes=32 time<1ms TTL=64';
        break;
      case 'github':
        output = <a href="https://github.com/rafitboo" target="_blank" rel="noreferrer" className="underline hover:text-white transition-colors">https://github.com/rafitboo</a>;
        break;
      case 'linkedin':
        output = <a href="https://linkedin.com/in/rafitboo/" target="_blank" rel="noreferrer" className="underline hover:text-white transition-colors">https://linkedin.com/in/rafitboo/</a>;
        break;
      case 'fb':
        output = <a href="https://facebook.com/rafitboo/" target="_blank" rel="noreferrer" className="underline hover:text-white transition-colors">https://facebook.com/rafitboo/</a>;
        break;
      case 'ig':
        output = <a href="https://instagram.com/rafitboo" target="_blank" rel="noreferrer" className="underline hover:text-white transition-colors">https://instagram.com/rafitboo</a>;
        break;
      case 'quote':
        output = quotes[Math.floor(Math.random() * quotes.length)];
        break;
      case 'date':
        output = new Date().toString();
        break;
      case 'whoami':
        output = 'guest_user_991';
        break;
      case 'sudo':
      case 'sudo su':
        output = 'Nice try. This incident will be reported.';
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case '':
        output = '';
        break;
      default:
        output = `bash: ${cmd}: command not found`;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInput('');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="w-full max-w-lg mx-auto bg-[#1E2124] rounded-xl overflow-hidden border border-gray-700 shadow-2xl font-mono text-sm"
    >
      <div className="bg-[#35393C] px-4 py-2 flex items-center gap-2 border-b border-gray-700">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-gray-400 text-xs tracking-wider">guest@rafitboo-system:~</span>
      </div>

      <div 
        ref={scrollRef}
        className="p-4 h-64 overflow-y-auto text-gray-300 flex flex-col gap-2 custom-scrollbar"
      >
        {history.map((line, index) => (
          <div key={index}>
            {line.command && (
              <div className="flex gap-2">
                <span className="text-green-400">guest@rafitboo:~$</span>
                <span className="text-white">{line.command}</span>
              </div>
            )}
            {line.output && <div className="whitespace-pre-wrap text-[#A4D8FF]/80">{line.output}</div>}
          </div>
        ))}
        
        <form onSubmit={handleCommand} className="flex gap-2 mt-2">
          <span className="text-green-400">guest@rafitboo:~$</span>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0"
            autoFocus
            spellCheck="false"
            autoComplete="off"
          />
        </form>
      </div>
    </motion.div>
  );
};

export default Terminal;