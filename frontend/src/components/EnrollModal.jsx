import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useContact } from '../context/ContactContext';
import { submitContact } from '../services/api';

export default function EnrollModal() {
  const { isModalOpen, closeContactModal, selectedSubject, showToast } = useContact();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: selectedSubject || 'O Level Inquiry',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedSubject) {
      setFormData((prev) => ({ ...prev, subject: selectedSubject }));
    }
  }, [selectedSubject]);

  if (!isModalOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      showToast('Please fill in your name, email, and contact number.', 'error');
      return;
    }

    setLoading(true);

    try {
      const res = await submitContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message || `Quick consultation inquiry for ${formData.subject}`,
      });

      showToast(res.message || 'Inquiry submitted successfully! We will contact you soon.', 'success');
      closeContactModal();
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'O Level Inquiry',
        message: '',
      });
    } catch (err) {
      showToast(err.message || 'Failed to submit inquiry. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-academic-gold/30">
        
        {/* Close Button */}
        <button
          onClick={closeContactModal}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="text-xs uppercase font-extrabold tracking-widest text-academic-goldDark">
            Direct Admissions Desk
          </span>
          <h3 className="font-serif text-2xl font-bold text-academic-navyDark mt-1">
            Book Academic Consultation
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Connect with Fareeha Kanwal’s team regarding syllabus enrollment and batch scheduling in Karachi.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Student / Guardian Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Ayesha Khan"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-academic-navy text-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="ayesha@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-academic-navy text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                WhatsApp / Phone *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+92-3XX-XXXXXXX"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-academic-navy text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Selected Subject / Program *
            </label>
            <select
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-academic-navy text-sm bg-white"
            >
              <option value="O Level Inquiry">O Level English Inquiry</option>
              <option value="A Level Inquiry">A Level English Inquiry</option>
              <option value="Literature Coaching">Focused Literature Coaching</option>
              <option value="Teacher Training & Consultancy">Teacher Training & Institutional Consultancy</option>
              <option value="General Inquiry">General Academic Consultation</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Short Note or Questions (Optional)
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="e.g. Current grade, institution (e.g. Nixor, Beaconhouse), and preferred exam series..."
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-academic-navy text-sm"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={closeContactModal}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-600 hover:bg-slate-50 text-sm font-semibold"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 rounded-xl bg-academic-navy hover:bg-academic-gold hover:text-academic-navyDark text-white text-sm font-bold shadow-md transition-all flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Send Inquiry'}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
