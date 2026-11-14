const mongoose = require('mongoose');

let isConnected = false;
let mockMode = false;

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri || uri.includes('<username>') || uri.includes('YOUR_MONGODB_URI')) {
    console.warn('\n⚠️ [MongoDB] MONGODB_URI is not configured in .env.');
    console.warn('💡 Running backend with in-memory resilient fallback store so all APIs continue to work smoothly.');
    console.warn('💡 To connect to MongoDB Atlas, set MONGODB_URI in backend/.env with your connection string.\n');
    mockMode = true;
    return false;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
    mockMode = false;
    console.log(`✅ [MongoDB Atlas Connected] Host: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error(`❌ [MongoDB Connection Error]: ${error.message}`);
    console.warn('💡 Falling back to in-memory store to keep API operational.');
    mockMode = true;
    return false;
  }
};

const getDbStatus = () => ({
  isConnected,
  mockMode,
  mongoUriConfigured: Boolean(process.env.MONGODB_URI && !process.env.MONGODB_URI.includes('<username>'))
});

module.exports = { connectDB, getDbStatus };
