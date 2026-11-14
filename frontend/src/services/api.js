// Frontend API Service communicating with Express.js Backend

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

/**
 * Submit contact inquiry to POST /api/contact
 */
export async function submitContact(contactData) {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to submit inquiry. Please try again.');
    }

    return data;
  } catch (error) {
    console.error('Contact submission error:', error);
    throw error;
  }
}

/**
 * Fetch testimonials from GET /api/testimonials
 */
export async function fetchTestimonials() {
  try {
    const response = await fetch(`${API_BASE_URL}/testimonials`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to load testimonials');
    }

    return data.data || [];
  } catch (error) {
    console.warn('Could not fetch dynamic testimonials, using fallback local data:', error);
    return null;
  }
}

/**
 * Submit a student/parent testimonial to POST /api/testimonials
 */
export async function submitTestimonial(testimonialData) {
  try {
    const response = await fetch(`${API_BASE_URL}/testimonials`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testimonialData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to submit testimonial.');
    }

    return data;
  } catch (error) {
    console.error('Testimonial submission error:', error);
    throw error;
  }
}
