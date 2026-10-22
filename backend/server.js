
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/Product');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: [
    'https://alkausarperfume.netlify.app',
    'http://localhost:5173',
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true, limit: '5mb' }));

app.get('/', (req, res) => {
  res.json({ message: 'AL-Kausar API is running' });
});

app.get('/api/health', (req, res) => {
  res.json({
    api: 'online',
    database:
      mongoose.connection.readyState === 1
        ? 'connected'
        : 'disconnected',
  });
});

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({})
      .sort({ createdAt: -1 })
      .lean();

    res.json(products);
  } catch (error) {
    console.error('Product fetch failed:', error.message);
    res.status(500).json({ error: 'Unable to fetch products' });
  }
});

app.post('/api/products', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.error('Product creation failed:', error.message);
    res.status(400).json({
      error: 'Unable to create product. Check the submitted fields.',
    });
  }
});

const PORT = process.env.PORT || 5000;

async function startServer() {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI environment variable is missing.');
  }

  await mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 15000,
  });

  console.log('MongoDB Atlas connected successfully.');


  
const nodemailer = require('nodemailer');

// Contact form: send enquiries to the business inbox
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, inquiryType, message } = req.body || {};

    // Validate required fields
    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof inquiryType !== 'string' ||
      typeof message !== 'string' ||
      !name.trim() ||
      !email.trim() ||
      !inquiryType.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: 'Please complete all required fields.',
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanInquiry = inquiryType.trim();
    const cleanMessage = message.trim();

    if (
      cleanName.length > 100 ||
      cleanEmail.length > 254 ||
      cleanInquiry.length > 100 ||
      cleanMessage.length > 5000
    ) {
      return res.status(400).json({
        success: false,
        message: 'One or more fields exceed the allowed length.',
      });
    }

    // Basic email format validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.',
      });
    }

    const allowedTypes = [
      'General Catalog Inquiry',
      'Artisanal Extraction Details',
      'Bulk/Boutique Curation',
    ];

    if (!allowedTypes.includes(cleanInquiry)) {
      return res.status(400).json({
        success: false,
        message: 'Please select a valid inquiry type.',
      });
    }

    const {
      EMAIL_SMTP_HOST,
      EMAIL_SMTP_PORT,
      EMAIL_SMTP_USERNAME,
      EMAIL_SMTP_PASSWORD,
      EMAIL_FROM_ADDRESS,
      EMAIL_TO_ADDRESS,
    } = process.env;

    if (
      !EMAIL_SMTP_HOST ||
      !EMAIL_SMTP_PORT ||
      !EMAIL_SMTP_USERNAME ||
      !EMAIL_SMTP_PASSWORD ||
      !EMAIL_FROM_ADDRESS ||
      !EMAIL_TO_ADDRESS
    ) {
      console.error('Contact email environment variables are missing.');

      return res.status(503).json({
        success: false,
        message: 'Email service is not configured. Please try again later.',
      });
    }

    const port = Number(EMAIL_SMTP_PORT);

    if (![465, 587].includes(port)) {
      return res.status(500).json({
        success: false,
        message: 'Email service configuration is invalid.',
      });
    }

    const transporter = nodemailer.createTransport({
      host: EMAIL_SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: EMAIL_SMTP_USERNAME,
        pass: EMAIL_SMTP_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: {
        name: 'AL-Kausar Website',
        address: EMAIL_FROM_ADDRESS,
      },
      to: EMAIL_TO_ADDRESS,
      replyTo: {
        name: cleanName,
        address: cleanEmail,
      },
      subject: `AL-Kausar Website Enquiry: ${cleanInquiry}`,
      text: [
        'New enquiry received from the AL-Kausar website.',
        '',
        `Name: ${cleanName}`,
        `Email: ${cleanEmail}`,
        `Inquiry Type: ${cleanInquiry}`,
        '',
        'Message:',
        cleanMessage,
      ].join('\n'),
    });

    console.log('Contact email accepted by SMTP:', info.messageId);

    return res.status(200).json({
      success: true,
      message: 'Your enquiry has been sent successfully.',
    });
  } catch (error) {
    // Keep credentials and detailed SMTP errors out of public responses.
    console.error('Contact email sending failed:', error.message);

    return res.status(502).json({
      success: false,
      message: 'We could not send your enquiry. Please try again shortly.',
    });
  }
});


  app.listen(PORT, '0.0.0.0', () => {
    console.log(`AL-Kausar API listening on port ${PORT}`);
  });
}

startServer().catch((error) => {
  console.error('Backend startup failed:', error.message);
  process.exit(1);
});
