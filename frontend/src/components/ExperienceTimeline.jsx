import React from 'react';
import { Landmark, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { useContact } from '../context/ContactContext';

export default function ExperienceTimeline() {
  const { openContactModal } = useContact();

  const institutions = [
    {
      name: 'Nixor College',
      tier: 'A Levels Program',
      role: 'A Level English Language & Literature Faculty',
      location: 'Defence / Clifton, Karachi',
      tag: 'Premier A-Level Institution',
      highlights: [
        'Advanced textual analysis & comparative essay structuring for CAIE 9093 / 9695.',
        'Mentored batches to top provincial grades and high-tier Cambridge distinctions.',
        'Conducted intensive debate rhetoric and university admission writing clinics.',
      ],
      color: 'border-l-red-600',
      badgeBg: 'bg-red-50 text-red-700 border-red-200',
    },
    {
      name: 'City School PAF Chapter',
      tier: 'A Levels Section',
      role: 'Senior A Level English Lecturer & Examiner Prep Lead',
      location: 'Shaheed-e-Millat Road, Karachi',
      tag: 'Flagship Chapter',
      highlights: [
        'Formulated targeted past-paper revision modules tailored to Cambridge marking schemes.',
        'Supervised student literary magazines and creative writing symposiums.',
        'Achieved consistent 90%+ pass rates with high concentration of A* and A grades.',
      ],
      color: 'border-l-blue-600',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      name: 'Beaconhouse A Levels College',
      tier: 'Beaconhouse College Programme (BCP)',
      role: 'A Level English Faculty & Academic Mentor',
      location: 'Karachi, Pakistan',
      tag: 'Nationwide Excellence',
      highlights: [
        'Comprehensive delivery of Cambridge English Language and Literature syllabi.',
        'Individualized feedback rubrics ensuring steady progression from C/B to A/A* bands.',
        'Facilitated inter-school declamation contests and rhetoric coaching.',
      ],
      color: 'border-l-sky-600',
      badgeBg: 'bg-sky-50 text-sky-700 border-sky-200',
    },
    {
      name: 'Zaitians O & A Levels College',
      tier: 'O & A Levels Division',
      role: 'Head of English Pedagogy & Senior Teacher',
      location: 'Karachi, Pakistan',
      tag: 'Rigorous Academic Track',
      highlights: [
        'Bridge curriculum aligning O Level (1123) fundamentals seamlessly into A Level (9093).',
        'Emphasis on unseen text dissection, poetry analysis, and stylistic device evaluation.',
        'Regular parent-educator performance reviews and customized support for candidates.',
      ],
      color: 'border-l-emerald-600',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      name: 'Houser A Levels College',
      tier: 'A Levels College',
      role: 'Senior A Level English Language & Literature Specialist',
      location: 'Karachi, Pakistan',
      tag: 'Focused Collegiate Mentorship',
      highlights: [
        'Curated thematic deep-dives into classic and modern drama (Shakespeare, Miller, etc.).',
        'Intensive timed essay writing drills simulating CAIE examination hall conditions.',
        'Guidance on personal statements and overseas collegiate essay submissions.',
      ],
      color: 'border-l-amber-600',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 bg-academic-cream/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-academic-navy text-academic-gold text-xs font-bold tracking-widest uppercase mb-3">
            <Landmark className="w-3.5 h-3.5" />
            Institutional Journey
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-academic-navyDark">
            Shaping Futures Across Karachi's Reputed Colleges
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            A proven record of academic rigor and student mentorship across premier A-Level institutions in Karachi.
          </p>
          <div className="w-20 h-1 bg-academic-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline / Card Layout */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:w-0.5 before:-ml-px before:bg-gradient-to-b before:from-academic-gold before:via-academic-teal before:to-academic-navy">
          {institutions.map((inst, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={inst.name}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Center Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-academic-navy border-4 border-academic-gold flex items-center justify-center text-white shadow-lg z-10">
                  <span className="font-serif text-xs font-bold">{index + 1}</span>
                </div>

                {/* Card Container */}
                <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-10">
                  <div
                    className={`bg-white rounded-2xl p-6 sm:p-8 shadow-academic hover:shadow-academic-hover border border-slate-200/80 transition-all duration-300 transform hover:-translate-y-1 ${
                      isEven ? 'md:text-left' : 'md:text-left'
                    }`}
                  >
                    {/* Top Tag & Location */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${inst.badgeBg}`}>
                        {inst.tier}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="w-3.5 h-3.5 text-academic-gold" />
                        <span>{inst.location}</span>
                      </div>
                    </div>

                    {/* Institution Name */}
                    <h3 className="font-serif text-2xl font-bold text-academic-navyDark">
                      {inst.name}
                    </h3>

                    {/* Role Title */}
                    <div className="text-academic-goldDark font-semibold text-sm mt-1 mb-4">
                      {inst.role}
                    </div>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2.5 text-sm text-slate-600 mb-5">
                      {inst.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-academic-tealLight shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Footer inquiry prompt */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-400 italic">
                        {inst.tag}
                      </span>
                      <button
                        onClick={() => openContactModal(`Inquiry inspired by ${inst.name}`)}
                        className="text-xs font-bold text-academic-navy hover:text-academic-gold transition-colors"
                      >
                        Inquire for coaching &rarr;
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 bg-academic-navy rounded-3xl p-8 sm:p-10 text-white text-center sm:flex items-center justify-between gap-6 shadow-xl">
          <div className="text-left mb-6 sm:mb-0">
            <h3 className="font-serif text-2xl font-bold text-academic-goldLight">
              Seeking Coaching for Your College or Private Cohort?
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              Classes available for individual candidates, group cohorts, and collegiate guest lectures across Karachi.
            </p>
          </div>
          <button
            onClick={() => openContactModal('A Level Inquiry')}
            className="px-6 py-3.5 rounded-xl bg-academic-gold hover:bg-academic-goldLight text-academic-navyDark font-bold text-sm shadow-md transition-all whitespace-nowrap shrink-0"
          >
            Check Cohort Availability
          </button>
        </div>

      </div>
    </section>
  );
}
