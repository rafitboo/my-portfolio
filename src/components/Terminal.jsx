// src/components/Terminal.jsx
"use client";

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { playTypeBeep, playButtonClick } from '@/utils/sound';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { command: '', output: "Type 'help' to see available commands." }
  ]);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

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
    playTypeBeep(); 
  };

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
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
        output = 'Pinging 192.168.1.1 with 32 bytes of data...\nReply from 192.168.1.1: bytes=32 time<1ms TTL=64';
        break;
      case 'github':
        output = <a href="https://github.com/rafitboo" target="_blank" rel="noreferrer" className="underline hover:text-white">GitHub</a>;
        break;
      case 'quote':
        output = quotes[Math.floor(Math.random() * quotes.length)];
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
      /* Increased max-width for a larger terminal window */
      className="w-full max-w-xl lg:max-w-2xl mx-auto bg-[#1E2124] rounded-2xl overflow-hidden border border-gray-700 shadow-2xl font-mono text-base"
    >
      <div className="bg-[#35393C] px-5 py-3 flex items-center gap-2.5 border-b border-gray-700">
        <div className="w-3.5 h-3.5 rounded-full bg-red-500"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-yellow-500"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-green-500"></div>
        <span className="ml-2 text-gray-400 text-sm tracking-wider font-semibold">guest@rafitboo-system:~</span>
      </div>

      <div 
        ref={scrollRef}
        onClick={handleTerminalClick}
        /* Increased height for a larger vertical layout */
        className="p-6 h-80 overflow-y-auto text-gray-200 flex flex-col gap-3 custom-scrollbar cursor-text text-base"
      >
        {history.map((line, index) => (
          <div key={index}>
            {line.command && (
              <div className="flex gap-2">
                <span className="text-green-400 font-bold">guest@rafitboo:~$</span>
                <span className="text-white font-semibold">{line.command}</span>
              </div>
            )}
            {line.output && <div className="whitespace-pre-wrap text-[#A4D8FF] font-medium">{line.output}</div>}
          </div>
        ))}
        
        <form onSubmit={handleCommand} className="flex gap-2 mt-2">
          <span className="text-green-400 font-bold">guest@rafitboo:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            className="flex-1 bg-transparent border-none outline-none text-white font-semibold focus:ring-0 p-0"
            autoFocus
            spellCheck="false"
            autoComplete="off"
          />
        </form>
      </div>
    </motion.div>
  );
}