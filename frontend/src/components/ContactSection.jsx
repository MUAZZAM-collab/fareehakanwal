import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, ShieldCheck, Clock, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';
import { submitContact } from '../services/api';
import { useContact } from '../context/ContactContext';

export default function ContactSection() {
  const { showToast } = useContact();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'O Level Inquiry',
    message: '',
    privacyConsent: true,
  });

  const [loading, setLoading] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    if (!formData.privacyConsent) {
      showToast('Please agree to the privacy policy regarding academic admissions.', 'error');
      return;
    }

    setLoading(true);
    setSubmittedStatus(null);

    try {
      const response = await submitContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      });

      setSubmittedStatus('success');
      showToast(response.message || 'Academic inquiry submitted successfully!', 'success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'O Level Inquiry',
        message: '',
        privacyConsent: true,
      });
    } catch (err) {
      setSubmittedStatus('error');
      showToast(err.message || 'An error occurred while sending your inquiry.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-academic-gold/10 text-academic-goldDark text-xs font-bold tracking-widest uppercase mb-3">
            <Mail className="w-3.5 h-3.5" />
            Admissions & Inquiries
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-academic-navyDark">
            Get in Touch With Fareeha Kanwal
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Have questions about O/A Level batches, personalized literature coaching, or institutional teacher training? Send a message below.
          </p>
          <div className="w-20 h-1 bg-academic-gold mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Location Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-academic-navy text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-academic-tealLight/10 rounded-full blur-2xl" />

              <h3 className="font-serif text-2xl font-bold text-academic-goldLight mb-6">
                Official Academic Office
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                For prompt response and batch reservations, please reach out via the official email address or academic admissions hotline.
              </p>

              {/* Direct Info List */}
              <div className="space-y-6">
                
                {/* Official Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-academic-gold shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      Primary Contact Email
                    </div>
                    {/* Placeholder comment: Replace with official email address */}
                    <a
                      href="mailto:fareeha.kanwal@example.com"
                      className="text-white hover:text-academic-gold font-medium text-base transition-colors"
                    >
                      fareeha.kanwal@example.com
                    </a>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      (Dedicated admissions desk)
                    </div>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-academic-gold shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      Admissions & WhatsApp Helpline
                    </div>
                    {/* Placeholder comment: Replace with verified contact number */}
                    <a
                      href="tel:+923000000000"
                      className="text-white hover:text-academic-gold font-medium text-base transition-colors"
                    >
                      +92-3XX-XXXXXXX
                    </a>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Mon – Sat: 11:00 AM – 7:00 PM PKT
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-academic-gold shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      Location & Campus
                    </div>
                    <div className="text-white font-medium text-base">
                      Karachi, Pakistan
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      In-person coaching centers & online global cohorts
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="mt-10 pt-6 border-t border-white/15">
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Connect on Social & Professional Platforms
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/fareeha.khi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-academic-gold hover:text-academic-navyDark text-xs font-semibold text-white transition-all"
                  >
                    <Instagram className="w-4 h-4 text-pink-400" />
                    <span>Instagram Profile</span>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-academic-gold hover:text-academic-navyDark text-xs font-semibold text-white transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Response Time Guarantee Box */}
            <div className="bg-academic-cream rounded-2xl p-6 border border-academic-gold/20 flex items-center gap-4">
              <Clock className="w-8 h-8 text-academic-gold shrink-0" />
              <div>
                <div className="font-serif font-bold text-academic-navy text-sm">
                  Prompt Response Guarantee
                </div>
                <div className="text-xs text-slate-600 mt-0.5">
                  All student and institutional inquiries are answered within 24 business hours.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-academic border border-slate-200">
              <h3 className="font-serif text-2xl font-bold text-academic-navyDark mb-2">
                Send an Admissions Inquiry
              </h3>
              <p className="text-slate-600 text-sm mb-6">
                Please provide accurate student details so we can recommend the appropriate curriculum track.
              </p>

              {/* Success Notification Alert */}
              {submittedStatus === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">Inquiry Sent Successfully!</div>
                    <div className="text-xs text-emerald-700 mt-1">
                      Thank you for reaching out. Ma'am Fareeha Kanwal's admissions coordinator will contact you via email or phone within 24 hours.
                    </div>
                  </div>
                </div>
              )}

              {/* Error Alert */}
              {submittedStatus === 'error' && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">Submission Failed</div>
                    <div className="text-xs text-rose-700 mt-1">
                      Could not submit inquiry right now. Please verify your details or email directly at fareeha.kanwal@example.com.
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Student or Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Fatima Tariq"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-academic-navy text-sm transition-all"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="fatima@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-academic-navy text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Contact / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92-3XX-XXXXXXX"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-academic-navy text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Subject Dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Inquiry Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-academic-navy text-sm bg-white transition-all"
                  >
                    <option value="O Level Inquiry">O Level English Inquiry (Syllabus 1123 / 2010)</option>
                    <option value="A Level Inquiry">A Level English Inquiry (Language 9093 / Literature 9695)</option>
                    <option value="Literature Coaching">Focused Literature & Textual Analysis Coaching</option>
                    <option value="Teacher Training & Consultancy">Teacher Training & Institutional Consultancy</option>
                    <option value="General Inquiry">General Academic Consultation</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Message / Current Academic Status *
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the candidate's current school/college (e.g. Nixor, Beaconhouse, etc.), exam series (May/June or Oct/Nov), and areas needing improvement..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-academic-navy text-sm transition-all"
                  />
                </div>

                {/* Privacy Notice */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="privacyConsent"
                    name="privacyConsent"
                    checked={formData.privacyConsent}
                    onChange={handleChange}
                    className="w-4 h-4 mt-0.5 rounded text-academic-navy focus:ring-academic-navy border-slate-300"
                  />
                  <label htmlFor="privacyConsent" className="text-xs text-slate-600 leading-relaxed cursor-pointer">
                    <span className="font-semibold text-slate-800">Privacy Notice:</span> I agree that my contact information will be used solely for responding to this academic inquiry and will not be shared with any third parties or marketing services.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 rounded-xl bg-academic-navy hover:bg-academic-gold hover:text-academic-navyDark text-white font-bold text-sm shadow-lg hover:shadow-academic transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                        Submitting Inquiry...
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Submit Inquiry to Fareeha Kanwal
                      </span>
                    )}
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
