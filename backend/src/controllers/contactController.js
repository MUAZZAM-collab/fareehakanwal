const Contact = require('../models/Contact');
const { getDbStatus } = require('../config/db');

// In-memory fallback submissions store
const mockContacts = [];

// @desc    Submit new contact inquiry
// @route   POST /api/contact
// @access  Public
const submitContact = async (req, res, next) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields: name, email, phone, and message.',
      });
    }

    const { mockMode } = getDbStatus();

    let savedSubmission;

    if (!mockMode) {
      try {
        savedSubmission = await Contact.create({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          subject: subject || 'General Inquiry',
          message: message.trim(),
          createdAt: new Date(),
        });
      } catch (dbErr) {
        console.warn('Database write failed, storing in resilient fallback cache:', dbErr.message);
        savedSubmission = {
          _id: `mem-${Date.now()}`,
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          subject: subject || 'General Inquiry',
          message: message.trim(),
          createdAt: new Date(),
          status: 'New',
        };
        mockContacts.unshift(savedSubmission);
      }
    } else {
      savedSubmission = {
        _id: `mem-${Date.now()}`,
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        subject: subject || 'General Inquiry',
        message: message.trim(),
        createdAt: new Date(),
        status: 'New',
      };
      mockContacts.unshift(savedSubmission);
    }

    console.log(`📩 [New Academic Inquiry] From: ${savedSubmission.name} <${savedSubmission.email}> | Subject: ${savedSubmission.subject}`);

    return res.status(201).json({
      success: true,
      message: 'Thank you for your inquiry! Ma\'am Fareeha Kanwal and our academic admissions desk will contact you within 24 hours.',
      data: {
        id: savedSubmission._id,
        name: savedSubmission.name,
        subject: savedSubmission.subject,
        createdAt: savedSubmission.createdAt,
      },
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get all contact inquiries (admin/review)
// @route   GET /api/contact
// @access  Internal
const getContacts = async (req, res, next) => {
  try {
    const { mockMode } = getDbStatus();
    if (!mockMode) {
      try {
        const contacts = await Contact.find().sort({ createdAt: -1 }).limit(100);
        return res.status(200).json({ success: true, count: contacts.length, data: contacts });
      } catch (err) {
        console.warn('DB read failed, returning mock contacts:', err.message);
      }
    }
    return res.status(200).json({
      success: true,
      count: mockContacts.length,
      data: mockContacts,
      note: 'Operating in in-memory mode'
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  submitContact,
  getContacts,
};
