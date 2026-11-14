const Testimonial = require('../models/Testimonial');
const { defaultTestimonials } = require('../seeds/seedTestimonials');
const { getDbStatus } = require('../config/db');

// In-memory fallback
let memoryTestimonials = [...defaultTestimonials];

// @desc    Get all testimonials
// @route   GET /api/testimonials
// @access  Public
const getTestimonials = async (req, res, next) => {
  try {
    const { mockMode } = getDbStatus();

    if (!mockMode) {
      try {
        let dbTestimonials = await Testimonial.find({ isFeatured: true }).sort({ createdAt: -1 });

        // If DB has no testimonials yet, seed them in the background
        if (dbTestimonials.length === 0) {
          const seeded = await Testimonial.insertMany(
            defaultTestimonials.map(({ _id, ...rest }) => rest)
          );
          return res.status(200).json({
            success: true,
            source: 'mongodb-seeded',
            count: seeded.length,
            data: seeded,
          });
        }

        return res.status(200).json({
          success: true,
          source: 'mongodb',
          count: dbTestimonials.length,
          data: dbTestimonials,
        });
      } catch (dbErr) {
        console.warn('Testimonial DB read failed, using default testimonials:', dbErr.message);
      }
    }

    return res.status(200).json({
      success: true,
      source: 'curated-cache',
      count: memoryTestimonials.length,
      data: memoryTestimonials,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Submit a new testimonial
// @route   POST /api/testimonials
// @access  Public
const createTestimonial = async (req, res, next) => {
  try {
    const { name, role, institution, quote, rating, highlight } = req.body;

    if (!name || !role || !quote) {
      return res.status(400).json({
        success: false,
        error: 'Name, role/grade, and testimonial quote are required.',
      });
    }

    const { mockMode } = getDbStatus();

    let newTestimonial;

    if (!mockMode) {
      try {
        newTestimonial = await Testimonial.create({
          name: name.trim(),
          role: role.trim(),
          institution: institution ? institution.trim() : 'Karachi, Pakistan',
          quote: quote.trim(),
          rating: Number(rating) || 5,
          highlight: highlight ? highlight.trim() : '',
          isFeatured: true,
        });
      } catch (err) {
        console.warn('DB creation failed, saving to memory fallback:', err.message);
      }
    }

    if (!newTestimonial) {
      newTestimonial = {
        _id: `mem-test-${Date.now()}`,
        name: name.trim(),
        role: role.trim(),
        institution: institution ? institution.trim() : 'Karachi, Pakistan',
        quote: quote.trim(),
        rating: Number(rating) || 5,
        highlight: highlight ? highlight.trim() : '',
        isFeatured: true,
        createdAt: new Date(),
      };
      memoryTestimonials.unshift(newTestimonial);
    }

    return res.status(201).json({
      success: true,
      message: 'Testimonial added successfully!',
      data: newTestimonial,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getTestimonials,
  createTestimonial,
};
