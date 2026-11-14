const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const { connectDB, getDbStatus } = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const errorHandler = require('./middleware/errorHandler');

// Load environment variables
dotenv.config();

const app = express();

// Connect to MongoDB Database
connectDB();

// CORS configuration (allow Vite dev server, custom frontend ports, Vercel deployments)
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // allow requests with no origin (like mobile apps, curl, postman)
    if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    }
    return callback(new Error('CORS Not Allowed for this origin'));
  },
  credentials: true,
}));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTTP logger in dev
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  const dbStatus = getDbStatus();
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Fareeha Kanwal Educator Portfolio API',
    database: dbStatus,
  });
});

// API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/testimonials', testimonialRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Fareeha Kanwal Academic Branding API',
    endpoints: {
      health: '/api/health',
      submitContact: 'POST /api/contact',
      getTestimonials: 'GET /api/testimonials',
    },
  });
});

// 404 Route handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    error: `Not Found - ${req.originalUrl}`,
  });
});

// Central Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => {
  console.log(`🚀 [Server Running] Port: ${PORT} | Mode: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 Base URL: http://localhost:${PORT}`);
  console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
});

// Graceful shutdown handling
process.on('unhandledRejection', (err) => {
  console.error(`💥 Unhandled Rejection: ${err.message}`);
});

module.exports = app;
