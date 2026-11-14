import React from 'react';
import { CheckCircle, Search, Edit3, Award, FileCode, HelpCircle, Sparkles } from 'lucide-react';
import { useContact } from '../context/ContactContext';

export default function Methodology() {
  const { openContactModal } = useContact();

  const steps = [
    {
      step: '01',
      title: 'Diagnostic Diagnostic Evaluation',
      desc: 'Each student begins with a comprehensive assessment to analyze their active vocabulary, grammar syntax, textual interpretation skills, and existing essay drafting speed.',
      tag: 'Individual Baseline',
    },
    {
      step: '02',
      title: 'Structural Textual Deconstruction',
      desc: 'Dismantling literary and linguistic devices. Students learn how to read between the lines, dissect authorial purpose, and analyze tone, register, and socio-historical context.',
      tag: 'Conceptual Clarity',
    },
    {
      step: '03',
      title: 'Cambridge Band Descriptor Alignment',
      desc: 'Direct study of Cambridge CAIE marking keys. We train students to evaluate essays from an examiner’s perspective, identifying exact threshold requirements for high-band marks.',
      tag: 'Exam Rubrics',
    },
    {
      step: '04',
      title: 'Rigorous Iterative Essay Drafting',
      desc: 'Weekly timed exam simulations accompanied by line-by-line constructive feedback. Students iterate on their drafts until structural fluency and argumentation become second nature.',
      tag: 'A* Mastery',
    },
  ];

  return (
    <section id="methodology" className="py-20 lg:py-28 bg-academic-navyDark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-academic-teal/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-academic-goldLight text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Pedagogical Excellence
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            The 4-Step Architecture of Excellence
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            How Fareeha Kanwal consistently transforms students from hesitant writers into confident, top-percentile Cambridge scholars.
          </p>
          <div className="w-20 h-1 bg-academic-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-academic-gold transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-3xl font-extrabold text-academic-gold/60 group-hover:text-academic-gold transition-colors">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-academic-goldLight transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-academic-goldLight font-medium">
                <CheckCircle className="w-4 h-4 text-academic-gold" />
                <span>Cambridge Benchmark</span>
              </div>
            </div>
          ))}
        </div>

        {/* Cambridge syllabus comparison note */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-left">
            <h3 className="font-serif text-2xl font-bold text-white">
              Preparing for CAIE May/June or Oct/Nov Series?
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl">
              Don’t leave language and literature preparation to the last month. Early enrollment ensures systematic essay revision, vocabulary mastery, and full past paper coverage under timed conditions.
            </p>
          </div>
          <button
            onClick={() => openContactModal('General Inquiry')}
            className="px-8 py-4 rounded-xl bg-academic-gold hover:bg-academic-goldLight text-academic-navyDark font-bold text-sm shadow-xl transition-all whitespace-nowrap"
          >
            Schedule Assessment Session
          </button>
        </div>

      </div>
    </section>
  );
}
