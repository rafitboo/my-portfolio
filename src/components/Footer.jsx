import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-[#111316] py-10 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center gap-6">
        
        {/* Social Links */}
        <div className="flex items-center gap-6">
          {/* GitHub */}
          <Link href="https://github.com/rafitboo" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#A4D8FF] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(164,216,255,0.8)]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </Link>
          
          {/* LinkedIn */}
          <Link href="https://linkedin.com/in/rafitboo/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#A4D8FF] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(164,216,255,0.8)]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>

          {/* Facebook */}
          <Link href="https://facebook.com/rafitboo/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#A4D8FF] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(164,216,255,0.8)]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </Link>
          {/* Instagram */}
          <Link href="https://instagram.com/rafitboo/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#A4D8FF] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(164,216,255,0.8)]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </Link>

          {/* X (Twitter) */}
          <Link href="https://twitter.com/rafitboo" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#A4D8FF] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(164,216,255,0.8)]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
          </Link>

          {/* Email */}
          <Link href="mailto:rafit991@gmail.com" className="text-gray-500 hover:text-[#A4D8FF] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(164,216,255,0.8)]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-[#A4D8FF]/70 text-sm font-medium tracking-wide">
          © 2026 Md. Rafiul Islam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;