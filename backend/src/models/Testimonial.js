const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Student or parent name is required'],
      trim: true,
      maxlength: 100,
    },
    role: {
      type: String,
      required: [true, 'Role or grade description is required'],
      trim: true,
      maxlength: 150,
      // e.g. "Parent of A Level Student", "Nixor College Alum - Grade A*", "Cambridge Distinction Holder"
    },
    institution: {
      type: String,
      trim: true,
      default: 'Karachi, Pakistan',
    },
    quote: {
      type: String,
      required: [true, 'Testimonial quote text is required'],
      trim: true,
      maxlength: 1000,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
      default: 5,
    },
    highlight: {
      type: String,
      trim: true,
      default: '',
    },
    isFeatured: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Testimonial', testimonialSchema);
