const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ['attars', 'perfumes', 'bakhoor'], required: true },
  imageUrl: { type: String, default: "" }, 
  description: { type: String, required: true },
  topNotes: [{ type: String }],
  heartNotes: [{ type: String }],
  baseNotes: [{ type: String }],
  longevity: { type: String, default: "24+ Hours" }
}, { timestamps: true });

// Exporting using traditional CommonJS module parameters
module.exports = mongoose.model('Product', ProductSchema);
