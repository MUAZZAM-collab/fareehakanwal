import React from 'react';
import { BookOpen, Compass, Lightbulb, Target, Users, Sparkles, Feather, Building2 } from 'lucide-react';
import { useContact } from '../context/ContactContext';

export default function About() {
  const { openContactModal } = useContact();

  const philosophies = [
    {
      icon: Users,
      title: 'Student-Centric Learning',
      description:
        'Every student possesses a unique linguistic voice. Rather than applying rigid rote-learning formulas, I tailor pedagogical guidance to identify personal strengths, bridge gaps in syntactic comprehension, and build unshakeable self-belief.',
    },
    {
      icon: Lightbulb,
      title: 'Conceptual Clarity Over Rote',
      description:
        'Mastering English requires understanding the architectural mechanics of language—from nuances of tone, register, and authorial intention to the socioeconomic subtexts of literary works across centuries.',
    },
    {
      icon: Target,
      title: 'Exam-Focused Cambridge Strategy',
      description:
        'Direct alignment with Cambridge CAIE 1123, 9093, and 9695 assessment matrices. Students learn examiner rubrics, band criteria, essay timing distribution, and precision analytical vocabulary to turn knowledge into A* scores.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-academic-gold/10 text-academic-goldDark text-xs font-bold tracking-widest uppercase mb-3">
            <Feather className="w-3.5 h-3.5" />
            Biography & Philosophy
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-academic-navyDark">
            Educator, Trainer & Academic Entrepreneur
          </h2>
          <div className="w-20 h-1 bg-academic-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p className="font-serif text-xl sm:text-2xl text-academic-navy leading-snug font-medium italic border-l-4 border-academic-gold pl-5">
              &ldquo;English education is not merely about clearing a syllabus; it is about equipping young minds with the eloquence, critical discernment, and expressive authority to command any stage in the world.&rdquo;
            </p>

            <p>
              Fareeha Kanwal is an <strong className="text-academic-navy font-semibold">accomplished A Level English teacher, corporate/academic trainer, and entrepreneur</strong> based in Karachi, Pakistan. Over the course of more than a decade in academic leadership, she has guided thousands of Cambridge O and A Level candidates to top national percentiles and prestigious global university admissions.
            </p>

            <p>
              Her professional journey has been highlighted in academic circles and podcast interviews exploring progressive pedagogy in Pakistan. In these discussions, she emphasizes how English language mastery serves as the primary cognitive gateway for interdisciplinary success—enabling students to excel equally in law, international relations, business, and literature.
            </p>

            {/* Special Highlight on Spring Buds School Initiative */}
            <div className="bg-academic-cream border-2 border-academic-gold/30 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-academic-navy text-academic-gold rounded-xl shrink-0 mt-1">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-academic-navy mb-1">
                    The Spring Buds School Initiative
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A testament to her deep dedication to educational reform and community leadership, Fareeha founded and led <strong className="text-academic-navy">Spring Buds School</strong>. This venture reflects her vision of extending foundational literacy, character development, and academic excellence beyond elite boundaries, demonstrating hands-on institutional leadership and educational governance.
                  </p>
                </div>
              </div>
            </div>

            <p>
              Beyond private coaching and collegiate teaching, Fareeha conducts teacher training workshops for educators across Karachi, sharing best practices in Cambridge marking standards, student psychological engagement, and rhetoric pedagogy.
            </p>
          </div>

          {/* Right Highlights & Metrics */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-academic-navy text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-academic-gold/15 rounded-full blur-2xl" />
              
              <h3 className="font-serif text-2xl font-bold text-academic-goldLight mb-6">
                Academic Impact At A Glance
              </h3>

              <div className="space-y-5">
                <div className="border-b border-white/10 pb-4">
                  <div className="text-3xl font-serif font-bold text-white">10+ Years</div>
                  <div className="text-sm text-slate-300">Teaching O & A Level English Language & Literature</div>
                </div>

                <div className="border-b border-white/10 pb-4">
                  <div className="text-3xl font-serif font-bold text-academic-gold">5 Top Colleges</div>
                  <div className="text-sm text-slate-300">Nixor, PAF Chapter, Beaconhouse, Zaitians, Houser</div>
                </div>

                <div className="border-b border-white/10 pb-4">
                  <div className="text-3xl font-serif font-bold text-white">CAIE Syllabus Expert</div>
                  <div className="text-sm text-slate-300">In-depth mastery of 1123, 2010, 9093, and 9695 specifications</div>
                </div>

                <div>
                  <div className="text-3xl font-serif font-bold text-academic-gold">Trainer & Founder</div>
                  <div className="text-sm text-slate-300">Founder of Spring Buds School & Educator Development Mentor</div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15">
                <button
                  onClick={() => openContactModal('Teacher Training & Consultancy')}
                  className="w-full py-3 px-4 bg-academic-gold hover:bg-academic-goldLight text-academic-navyDark font-bold rounded-xl text-center text-sm shadow transition-colors"
                >
                  Consult for Teacher Training / Workshops
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Teaching Philosophy Pillars */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-academic-navy">
              Three Pillars of the Kanwal Philosophy
            </h3>
            <p className="text-slate-600 mt-2 max-w-xl mx-auto text-sm sm:text-base">
              Preparing students not merely for examination thresholds, but for critical intellect and lifelong eloquence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophies.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-academic-cream/60 rounded-2xl p-8 border border-academic-gold/20 hover:border-academic-gold hover:shadow-academic transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-academic-navy text-academic-gold flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-academic-gold group-hover:text-academic-navyDark transition-all duration-300 shadow-md">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-academic-navyDark mb-3 group-hover:text-academic-goldDark transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
