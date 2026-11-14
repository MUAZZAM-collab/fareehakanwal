import React from 'react';
import { ArrowRight, Award, BookOpen, CheckCircle, GraduationCap, MapPin, Sparkles, Instagram, MessageCircle } from 'lucide-react';
import { useContact } from '../context/ContactContext';

export default function Hero() {
  const { openContactModal } = useContact();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-academic-navyDark via-academic-navy to-academic-navyDark text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Decorative Graphic Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-academic-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-academic-teal/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Story */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Location & Credentials Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-academic-gold/30 text-academic-goldLight text-xs sm:text-sm font-semibold tracking-wide">
              <MapPin className="w-4 h-4 text-academic-gold" />
              <span>Karachi, Pakistan</span>
              <span className="text-white/40">•</span>
              <span className="text-white">O & A Level Specialist</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Fareeha Kanwal –{' '}
              <span className="gold-gradient-text block sm:inline">
                Empowering Students
              </span>{' '}
              Through English
            </h1>

            {/* Sub-headline */}
            <p className="text-xl sm:text-2xl text-academic-gold font-serif italic font-normal">
              Experienced O & A Level English Educator in Karachi
            </p>

            {/* Exact Required Introduction Paragraph */}
            <div className="relative bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm text-slate-200 text-base sm:text-lg leading-relaxed shadow-inner">
              <span className="absolute -top-3 left-6 px-2 py-0.5 bg-academic-gold text-academic-navyDark text-xs font-bold rounded uppercase tracking-wider">
                Teaching Legacy
              </span>
              <p className="mt-1">
                &ldquo;With a rich and diverse teaching career spanning some of Karachi's most reputed institutions, I am dedicated to helping students master the English language and literature. My journey as an educator has been shaped by my roles at Nixor College, City School PAF Chapter (A Levels), Beaconhouse A Levels College, Zaitians O & A Levels College, and Houser A Levels College. I believe in fostering critical thinking, effective communication, and a lifelong appreciation for the English language. My approach is tailored to the unique needs of O and A Level students, preparing them not just for exams, but for success beyond the classroom.&rdquo;
              </p>
            </div>

            {/* Key Value Proposition Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-left">
                <GraduationCap className="w-5 h-5 text-academic-gold shrink-0" />
                <div>
                  <div className="font-bold text-sm text-white">5 Elite Colleges</div>
                  <div className="text-xs text-slate-400">Nixor, PAF, Beaconhouse...</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-left">
                <Award className="w-5 h-5 text-academic-gold shrink-0" />
                <div>
                  <div className="font-bold text-sm text-white">A* & Distinctions</div>
                  <div className="text-xs text-slate-400">Proven CAIE Results</div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-left">
                <Sparkles className="w-5 h-5 text-academic-gold shrink-0" />
                <div>
                  <div className="font-bold text-sm text-white">Trainer & Leader</div>
                  <div className="text-xs text-slate-400">Spring Buds School</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => openContactModal('A Level Inquiry')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-academic-gold to-academic-goldDark hover:from-academic-goldLight hover:to-academic-gold text-academic-navyDark font-bold text-base shadow-xl hover:shadow-academic transition-all transform hover:-translate-y-1"
              >
                Enroll / Inquire Now
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/20 transition-all"
              >
                <BookOpen className="w-5 h-5 text-academic-gold" />
                Explore Courses
              </a>

              <a
                href="https://www.instagram.com/fareeha.khi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-academic-goldLight hover:text-white text-sm font-medium transition-colors"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </div>
          </div>

          {/* Right Column: Profile Picture Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Accent Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-academic-gold/30 to-academic-teal/40 rounded-3xl blur-2xl transform rotate-3 scale-95" />

              {/* Main Card */}
              <div className="relative rounded-3xl bg-academic-navyDark/90 border-2 border-academic-gold/30 p-6 shadow-2xl backdrop-blur-xl">
                
                {/* 
                  =============================================================================
                  TODO: PROFILE PICTURE UPDATE
                  The user's Instagram profile (https://www.instagram.com/fareeha.khi/) is currently private.
                  When Fareeha Kanwal provides her high-resolution portrait or studio headshot,
                  save the image to 'src/assets/fareeha-kanwal.jpg' and replace the placeholder below.
                  =============================================================================
                */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-academic-navy to-academic-tealDark border border-white/10 group">
                  {/* High Quality Placeholder Portrait Representation */}
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-radial from-slate-700/50 to-academic-navy">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-academic-gold to-amber-200 text-academic-navy font-serif font-black text-5xl flex items-center justify-center shadow-2xl border-4 border-white/20 mb-6 group-hover:scale-105 transition-transform duration-300">
                      FK
                    </div>
                    <div className="font-serif text-2xl font-bold text-white mb-1">
                      Fareeha Kanwal
                    </div>
                    <div className="text-academic-gold text-sm font-semibold tracking-wide uppercase mb-3">
                      Master of English Pedagogy
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 text-xs text-slate-300 border border-white/10">
                      <span>Karachi, Pakistan</span>
                    </div>

                    <div className="mt-6 text-xs text-slate-400 italic max-w-xs border-t border-white/10 pt-4">
                      &ldquo;Language is not merely a subject; it is the architecture of thought and expression.&rdquo;
                    </div>
                  </div>

                  {/* Corner Ribbon */}
                  <div className="absolute top-4 right-4 bg-academic-gold text-academic-navyDark text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    CAIE Mentor
                  </div>
                </div>

                {/* Profile Card Bottom Details */}
                <div className="mt-5 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-300 pb-2 border-b border-white/10">
                    <span className="text-slate-400">Professional Title</span>
                    <span className="font-medium text-white text-right">O & A Level Teacher | Trainer</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-300 pb-2 border-b border-white/10">
                    <span className="text-slate-400">Instagram Handle</span>
                    <a
                      href="https://www.instagram.com/fareeha.khi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-academic-goldLight hover:underline"
                    >
                      @fareeha.khi
                    </a>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="text-slate-400">Teaching Experience</span>
                    <span className="font-semibold text-emerald-400">10+ Years (Karachi Top Colleges)</span>
                  </div>
                </div>

                {/* Direct Connect Quick Action */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <button
                    onClick={() => openContactModal('General Inquiry')}
                    className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-academic-gold hover:text-academic-navyDark font-semibold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Request Direct Admissions Call
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
