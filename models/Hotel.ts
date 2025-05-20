import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a hotel name'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
  },
  address: {
    type: String,
    required: [true, 'Please provide an address'],
  },
  city: {
    type: String,
    required: [true, 'Please provide a city'],
  },
  state: {
    type: String,
    required: [true, 'Please provide a state'],
  },
  zip: {
    type: String,
    required: [true, 'Please provide a zip code'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price'],
  },
  images: [{
    type: String,
  }],
  amenities: [{
    type: String,
  }],
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  reviews: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Hotel = mongoose.models.Hotel || mongoose.model('Hotel', hotelSchema);

export default Hotel; 