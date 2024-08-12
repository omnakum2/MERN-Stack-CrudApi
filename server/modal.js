const mongoose = require('mongoose');
const { Schema } = mongoose;

// Category schema
const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['active', 'deactive'],
    default: 'deactive'
  }
}, {
  timestamps: true 
});

// Product schema
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0 
  },
  category_id: {
    type: Schema.Types.ObjectId,
    ref: 'Category', // Reference to the Category schema
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'deactive'],
    default: 'deactive'
  }
}, {
  timestamps: true
});

// Create the models
const Category = mongoose.model('Category', categorySchema);
const Product = mongoose.model('Product', productSchema);

module.exports = { Category, Product };
