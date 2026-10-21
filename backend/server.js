const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/Product');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// 💥 CRITICAL FIX: Upgrade text payload limits so large Base64 files can pass cleanly
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Set strict query rules to avoid Mongoose warnings
mongoose.set('strictQuery', false);

// Establish database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🍃 Database Connection Established Successfully.'))
  .catch((err) => console.error('🔴 MONGODB ATLAS CONNECTION CRASH:', err.message));

// Fetch Products Route
app.get('/api/products', async (req, res) => {
  try {
    // Check if the connection is uninitialized or dropped
    if (mongoose.connection.readyState !== 1) {
      console.error("🔴 API Request blocked: Database connection state is offline.");
      return res.status(500).json({ 
        error: "Database Offline", 
        details: "The backend server is active but has no connection to MongoDB Atlas." 
      });
    }

    const products = await Product.find({}).sort({ createdAt: -1 });
    res.json(products || []);
  } catch (err) {
    console.error("🔴 DATABASE FETCH EXCEPTION ERROR:", err.message);
    res.status(500).json({ error: "Internal Server Error", message: err.message });
  }
});

// Create Product Route
app.post('/api/products', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(500).json({ error: "Database offline" });
    }
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error("🔴 DATABASE WRITE EXCEPTION ERROR:", err.message);
    res.status(400).json({ error: "Failed to create product document", message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Production API server spinning smoothly on port ${PORT}`));
