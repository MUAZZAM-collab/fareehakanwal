const mongoose = require('mongoose');
const validator = require('validator');

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your full name'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email address'],
      trim: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email address'],
    },
    phone: {
      type: String,
      required: [true, 'Please provide a contact phone or WhatsApp number'],
      trim: true,
      maxlength: [25, 'Phone number cannot exceed 25 characters'],
    },
    subject: {
      type: String,
      required: [true, 'Please select an inquiry subject'],
      enum: {
        values: [
          'O Level Inquiry',
          'A Level Inquiry',
          'Literature Coaching',
          'Teacher Training & Consultancy',
          'General Inquiry'
        ],
        message: 'Invalid subject category selected',
      },
      default: 'General Inquiry',
    },
    message: {
      type: String,
      required: [true, 'Please enter your message or student details'],
      trim: true,
      maxlength: [2000, 'Message cannot exceed 2000 characters'],
    },
    privacyConsent: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      enum: ['New', 'Contacted', 'Enrolled', 'Archived'],
      default: 'New',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Contact', contactSchema);
