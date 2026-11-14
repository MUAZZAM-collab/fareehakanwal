import React from 'react';
import { BookOpen, GraduationCap, Instagram, Mail, Phone, Heart, Award, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-academic-navyDark text-slate-300 pt-16 pb-12 border-t border-academic-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-academic-gold text-academic-navyDark font-serif font-black text-xl flex items-center justify-center">
                FK
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Fareeha Kanwal
                </h3>
                <p className="text-xs text-academic-gold font-medium uppercase tracking-wider">
                  O & A Level English Educator | Trainer
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering students through rigorous English language and literature mastery across Karachi. Fostering critical intellect, eloquence, and lifelong academic confidence.
            </p>

            <div className="pt-2 text-xs text-slate-400">
              Founder & Educational Leader at <strong className="text-academic-goldLight">Spring Buds School</strong>.
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/fareeha.khi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-academic-gold hover:text-academic-navyDark flex items-center justify-center text-white transition-colors"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:fareeha.kanwal@example.com"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-academic-gold hover:text-academic-navyDark flex items-center justify-center text-white transition-colors"
                aria-label="Email Fareeha Kanwal"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-base text-white">
              Syllabus & Curricula
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#courses" className="hover:text-academic-gold transition-colors">O Level English Language (1123)</a></li>
              <li><a href="#courses" className="hover:text-academic-gold transition-colors">O Level English Literature (2010)</a></li>
              <li><a href="#courses" className="hover:text-academic-gold transition-colors">A Level English Language (9093)</a></li>
              <li><a href="#courses" className="hover:text-academic-gold transition-colors">A Level English Literature (9695)</a></li>
              <li><a href="#courses" className="hover:text-academic-gold transition-colors">Teacher Training Workshops</a></li>
            </ul>
          </div>

          {/* Associated Institutions */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-base text-white">
              Institutional Teaching Legacy
            </h4>
            <div className="flex flex-wrap gap-1.5 text-xs">
              {[
                'Nixor College',
                'City School PAF Chapter',
                'Beaconhouse A Levels College',
                'Zaitians O & A Levels',
                'Houser A Levels College',
                'Spring Buds School',
              ].map((inst) => (
                <span
                  key={inst}
                  className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                >
                  {inst}
                </span>
              ))}
            </div>

            <div className="pt-4 text-xs text-slate-400">
              <span className="text-academic-gold font-semibold">Location:</span> Karachi, Sindh, Pakistan.
            </div>
          </div>

        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center md:text-left space-y-1">
            <p>
              &copy; {new Date().getFullYear()} Fareeha Kanwal. All Rights Reserved.
            </p>
            <p className="text-[11px] text-slate-600">
              Cambridge Assessment International Education (CAIE) syllabus codes (1123, 2010, 9093, 9695) are cited for educational identification purposes only.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
