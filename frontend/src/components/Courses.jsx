import React, { useState } from 'react';
import { BookCheck, Check, Layers, Sparkles, Clock, FileText, ArrowRight, BookOpen } from 'lucide-react';
import { useContact } from '../context/ContactContext';

export default function Courses() {
  const { openContactModal } = useContact();
  const [activeTab, setActiveTab] = useState('all');

  const courses = [
    {
      id: 'o-level-lang',
      level: 'O Level',
      syllabusCode: 'CAIE 1123',
      title: 'O Level English Language',
      tagline: 'Foundations of Rhetoric, Precision & Comprehension',
      description:
        'A rigorous preparatory program mastering Cambridge syllabus 1123. Focused on cultivating structural discipline, concise synthesis, and persuasive writing agility.',
      modules: [
        'Directed Writing (Speeches, formal letters, articles, reports)',
        'Continuous Writing & Narrative / Descriptive essays',
        'Textual analysis & complex comprehension deduction',
        'Summary writing with strict word-limit precision',
        'Grammar mechanics, lexical diversity & syntactic variety',
      ],
      duration: 'Regular Academic Year / Fast-Track Crash Course',
      idealFor: 'Grades 9, 10 & 11 (O-1, O-2, O-3) students',
      category: 'olevel',
    },
    {
      id: 'o-level-lit',
      level: 'O Level',
      syllabusCode: 'CAIE 2010 / 0475',
      title: 'O Level English Literature',
      tagline: 'Textual Insight, Thematic Depth & Critical Commentary',
      description:
        'Deconstruct classic prose, poetry, and dramatic masterpieces. Students develop nuanced close-reading skills and master Cambridge literary analytical criteria.',
      modules: [
        'Detailed analysis of set Cambridge poetry anthologies',
        'Character dissection & dramatic devices in Shakespeare / modern plays',
        'Thematic prose analysis & historical socio-cultural context',
        'Structuring high-band literary comparative essays',
        'Unseen poetry decoding techniques & quotation integration',
      ],
      duration: 'Full Syllabus / Paper-Specific Deep Dive',
      idealFor: 'Students passionate about literary analysis & high humanities scores',
      category: 'olevel',
    },
    {
      id: 'a-level-lang',
      level: 'A Level',
      syllabusCode: 'CAIE 9093',
      title: 'A Level English Language',
      tagline: 'Linguistic Analysis, Stylistics & Discourse Mechanics',
      description:
        'Advanced examination of language mechanics across diverse genres and registers. Covers stylistic analysis, shorter directed writing, language change, and child language acquisition.',
      modules: [
        'Paper 1: Reading & Text Analysis (tone, register, semantic fields)',
        'Paper 2: Writing for diverse audiences & transformative tasks',
        'Paper 3: Language Variation & Global English dynamics',
        'Paper 4: Language Topics (Child Language Acquisition & Psycholinguistics)',
        'In-depth rubric alignment with Cambridge band descriptors',
      ],
      duration: 'AS & A2 Comprehensive Coaching',
      idealFor: 'A Level candidates aspiring for law, humanities, or A* grades',
      category: 'alevel',
    },
    {
      id: 'a-level-lit',
      level: 'A Level',
      syllabusCode: 'CAIE 9695',
      title: 'A Level English Literature',
      tagline: 'Mastery of Drama, Poetry, Prose & Unseen Texts',
      description:
        'The definitive Cambridge A-Level Literature experience. Rigorous textual scrutiny, contextual evaluation, and multi-perspective critical debate.',
      modules: [
        'Paper 1 & Paper 2: Drama & Poetry close analytical commentary',
        'Paper 3 & Paper 4: Shakespeare, pre-1900 literature & contemporary voices',
        'Evaluating competing critical interpretations and critical schools',
        'Crafting sustained, sophisticated academic arguments under timed pressure',
        'Past examiner commentary insights and distinction essay breakdowns',
      ],
      duration: 'AS & A2 Full Track / Paper Refinement',
      idealFor: 'Literature enthusiasts & Cambridge distinction contenders',
      category: 'alevel',
    },
    {
      id: 'teacher-training',
      level: 'Professional',
      syllabusCode: 'Faculty Development',
      title: 'Teacher Training & Curriculum Workshops',
      tagline: 'Institutional Pedagogical Empowerment for Schools & Colleges',
      description:
        'Bespoke training modules for English language and literature faculty across Karachi institutions, bridging syllabus theory and classroom execution.',
      modules: [
        'Demystifying Cambridge CAIE band rubrics and standardized marking',
        'Pedagogical frameworks to enhance student critical writing engagement',
        'Effective essay correction routines that generate measurable improvement',
        'Integrating literary debate and rhetoric within high school classrooms',
        'Curriculum pacing & mock examination assessment frameworks',
      ],
      duration: '1-Day to 3-Day Intensive Institutional Modules',
      idealFor: 'Schools, colleges, academic directors & English departments',
      category: 'training',
    },
  ];

  const filteredCourses = activeTab === 'all'
    ? courses
    : courses.filter((c) => c.category === activeTab);

  return (
    <section id="courses" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-academic-gold/10 text-academic-goldDark text-xs font-bold tracking-widest uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Academic Offerings
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-academic-navyDark">
            Courses & Curricula Offered
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Structured Cambridge preparation engineered for conceptual mastery, analytical precision, and A* outcomes.
          </p>
          <div className="w-20 h-1 bg-academic-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {[
            { id: 'all', label: 'All Curricula' },
            { id: 'olevel', label: 'O Level (1123 / 2010)' },
            { id: 'alevel', label: 'A Level (9093 / 9695)' },
            { id: 'training', label: 'Teacher Training & Institutions' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-academic-navy text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-academic-cream/50 rounded-3xl p-7 border border-slate-200 hover:border-academic-gold hover:shadow-academic-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-lg bg-academic-navy text-academic-gold">
                    {course.level}
                  </span>
                  <span className="text-xs font-bold text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                    {course.syllabusCode}
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="font-serif text-2xl font-bold text-academic-navyDark group-hover:text-academic-goldDark transition-colors">
                  {course.title}
                </h3>
                <div className="text-xs font-semibold text-academic-tealLight mt-1 mb-4 italic">
                  {course.tagline}
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Modules Checklist */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-academic-navy">
                    Key Focus Areas:
                  </div>
                  {course.modules.map((m, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Details & Button */}
              <div className="pt-6 border-t border-slate-200/80 mt-auto space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-academic-gold" />
                    {course.duration}
                  </span>
                </div>

                <button
                  onClick={() => openContactModal(course.level.includes('O Level') ? 'O Level Inquiry' : course.level.includes('A Level') ? 'A Level Inquiry' : 'Teacher Training & Consultancy')}
                  className="w-full py-3 px-4 rounded-xl bg-academic-navy hover:bg-academic-gold hover:text-academic-navyDark text-white font-bold text-sm shadow transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-md"
                >
                  <span>Inquire for this Course</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
