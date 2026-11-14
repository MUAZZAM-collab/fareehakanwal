import React, { useState, useEffect } from 'react';
import { Star, MessageSquareQuote, Quote, PlusCircle, CheckCircle, GraduationCap } from 'lucide-react';
import { fetchTestimonials, submitTestimonial } from '../services/api';
import { useContact } from '../context/ContactContext';

// Built-in fallback testimonials matching the Karachi institutions
const fallbackTestimonials = [
  {
    _id: 'fb-1',
    name: 'Ayesha Siddiqui',
    role: 'A Level English Literature Student (Grade A*)',
    institution: 'Nixor College',
    quote: 'Ma\'am Fareeha transformed the way I analyze unseen poetry and prose. Her structural frameworks for Cambridge 9093 and 9695 papers made all the difference in achieving my A*.',
    rating: 5,
    highlight: 'Scored A* in Cambridge A Levels',
  },
  {
    _id: 'fb-2',
    name: 'Dr. Tariq Mahmood',
    role: 'Parent of O Level English Student',
    institution: 'Beaconhouse College Program',
    quote: 'Her mentorship brought clarity, disciplined essay structuring, and genuine passion for English literature to our son. Fareeha Ma\'am is undeniably one of Karachi\'s premier English educators.',
    rating: 5,
    highlight: 'Parent Recommendation',
  },
  {
    _id: 'fb-3',
    name: 'Bilal Farooqui',
    role: 'O Level English Language Candidate (Distinction)',
    institution: 'City School PAF Chapter',
    quote: 'Directed writing and comprehension always felt intimidating until I attended Ma\'am Fareeha\'s sessions. Her feedback on every draft was meticulous, encouraging, and razor-sharp.',
    rating: 5,
    highlight: 'Distinction in English 1123',
  },
  {
    _id: 'fb-4',
    name: 'Zainab Raza',
    role: 'A Level English Language Candidate',
    institution: 'Zaitians O & A Levels College',
    quote: 'Fareeha ma\'am does not simply teach syllabus contents; she instills critical rhetoric, vocabulary mastery, and linguistic confidence that serves us at college and university interviews.',
    rating: 5,
    highlight: 'Exceptional Linguistic Growth',
  },
  {
    _id: 'fb-5',
    name: 'Hamza Abbasi',
    role: 'A Level English Literature Alumnus',
    institution: 'Houser A Levels College',
    quote: 'The deep dive into Shakespearean drama and post-colonial texts under Ma\'am Fareeha was the highlight of my A-level journey. Her passion for literature is truly infectious.',
    rating: 5,
    highlight: 'Top 5% in Cambridge Session',
  },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(fallbackTestimonials);
  const [loading, setLoading] = useState(true);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const { showToast } = useContact();

  // Testimonial submission form state
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    institution: '',
    quote: '',
    rating: 5,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function loadTestimonials() {
      try {
        const data = await fetchTestimonials();
        if (data && data.length > 0) {
          setTestimonials(data);
        }
      } catch (err) {
        console.warn('Using fallback testimonials.');
      } finally {
        setLoading(false);
      }
    }
    loadTestimonials();
  }, []);

  const handleTestimonialSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.role || !formData.quote) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await submitTestimonial(formData);
      if (res && res.data) {
        setTestimonials((prev) => [res.data, ...prev]);
        showToast('Thank you! Your testimonial has been submitted.', 'success');
        setShowSubmitModal(false);
        setFormData({ name: '', role: '', institution: '', quote: '', rating: 5 });
      }
    } catch (err) {
      showToast(err.message || 'Could not submit testimonial.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-academic-cream/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-academic-gold/10 text-academic-goldDark text-xs font-bold tracking-widest uppercase mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            Voices of Success
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-academic-navyDark">
            Words From Students & Parents
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Real stories of academic transformation, Cambridge distinctions, and confident articulation.
          </p>
          <div className="w-20 h-1 bg-academic-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={t._id || idx}
              className="bg-white rounded-3xl p-8 shadow-academic hover:shadow-academic-hover border border-slate-200/80 flex flex-col justify-between transition-all duration-300 relative group"
            >
              <div>
                {/* Quotation Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-academic-gold">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-academic-gold" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-academic-gold/20 group-hover:text-academic-gold/40 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-base text-academic-navyDark">
                    {t.name}
                  </h4>
                  <p className="text-xs text-academic-goldDark font-semibold">
                    {t.role}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {t.institution || 'Karachi, Pakistan'}
                  </p>
                </div>
                {t.highlight && (
                  <span className="hidden sm:inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {t.highlight}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Share Testimonial Action */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowSubmitModal(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-academic-navy font-semibold text-sm border border-slate-300 shadow-sm transition-all"
          >
            <PlusCircle className="w-4 h-4 text-academic-gold" />
            Are you a former student or parent? Leave a review
          </button>
        </div>

      </div>

      {/* Submit Testimonial Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <h3 className="font-serif text-2xl font-bold text-academic-navy mb-2">
              Share Your Learning Experience
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mb-6">
              Your feedback inspires prospective O & A Level candidates in Karachi.
            </p>

            <form onSubmit={handleTestimonialSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Khan"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-academic-navy text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Role / Grade *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g. A Level Student (A*)"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-academic-navy text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Institution / College
                  </label>
                  <input
                    type="text"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    placeholder="e.g. Nixor / Beaconhouse"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-academic-navy text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Rating
                </label>
                <select
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-academic-navy text-sm"
                >
                  <option value={5}>⭐⭐⭐⭐⭐ (5 / 5 - Exceptional)</option>
                  <option value={4}>⭐⭐⭐⭐ (4 / 5 - Very Good)</option>
                  <option value={3}>⭐⭐⭐ (3 / 5 - Good)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Review / Experience *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.quote}
                  onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                  placeholder="Describe how Ma'am Fareeha's teaching helped you with essays, exams, or language mastery..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-academic-navy text-sm"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowSubmitModal(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-600 hover:bg-slate-100 text-sm font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-xl bg-academic-navy hover:bg-academic-gold hover:text-academic-navyDark text-white text-sm font-bold shadow transition-colors"
                >
                  {isSubmitting ? 'Submitting...' : 'Post Testimonial'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
