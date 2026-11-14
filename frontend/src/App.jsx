import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContactProvider } from './context/ContactContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceTimeline from './components/ExperienceTimeline';
import Courses from './components/Courses';
import Methodology from './components/Methodology';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import EnrollModal from './components/EnrollModal';
import Toast from './components/Toast';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ExperienceTimeline />
      <Courses />
      <Methodology />
      <Testimonials />
      <ContactSection />
    </>
  );
}

export default function App() {
  return (
    <ContactProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-academic-cream text-academic-slate">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<ExperienceTimeline />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<ContactSection />} />
              {/* Fallback to Home */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          <Footer />

          {/* Interactive Global Modals & Notifications */}
          <EnrollModal />
          <Toast />
        </div>
      </Router>
    </ContactProvider>
  );
}
