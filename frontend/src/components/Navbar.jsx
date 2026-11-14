import React, { useState } from 'react';
import { BookOpen, Menu, X, PhoneCall, GraduationCap, Instagram } from 'lucide-react';
import { useContact } from '../context/ContactContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openContactModal } = useContact();

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Institutions', href: '#experience' },
    { name: 'Courses', href: '#courses' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-academic-navyDark/95 backdrop-blur-md border-b border-academic-gold/20 text-white">
      {/* Top Banner Notice */}
      <div className="bg-academic-navy text-xs py-1.5 px-4 text-center border-b border-white/10 hidden sm:flex justify-between items-center max-w-7xl mx-auto">
        <span className="text-academic-gold font-medium flex items-center gap-1.5">
          <GraduationCap className="w-3.5 h-3.5" /> Cambridge CAIE O & A Level Admissions Open • Karachi
        </span>
        <div className="flex items-center gap-4 text-slate-300">
          <span>📧 fareeha.kanwal@example.com</span>
          <span>📞 +92-3XX-XXXXXXX</span>
          <a
            href="https://www.instagram.com/fareeha.khi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-academic-goldLight hover:underline flex items-center gap-1"
          >
            <Instagram className="w-3 h-3" /> @fareeha.khi
          </a>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-academic-goldDark to-academic-goldLight flex items-center justify-center text-academic-navyDark font-serif font-bold text-2xl shadow-lg border-2 border-white/20 group-hover:scale-105 transition-transform">
            FK
          </div>
          <div>
            <div className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-academic-goldLight transition-colors">
              Fareeha Kanwal
            </div>
            <div className="text-xs uppercase tracking-widest text-academic-gold font-medium">
              O/A Level English Educator & Trainer
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-200 hover:text-academic-goldLight transition-colors"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={() => openContactModal('O Level Inquiry')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-academic-gold to-academic-goldDark hover:from-academic-goldLight hover:to-academic-gold text-academic-navyDark font-semibold text-sm shadow-md hover:shadow-academic transition-all transform hover:-translate-y-0.5"
          >
            <PhoneCall className="w-4 h-4" />
            Book Consultation
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-academic-navyDark border-b border-academic-gold/20 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/10 hover:text-academic-goldLight"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openContactModal('O Level Inquiry');
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-academic-gold text-academic-navyDark font-bold text-sm shadow"
            >
              <PhoneCall className="w-4 h-4" />
              Book Consultation / Inquire
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
