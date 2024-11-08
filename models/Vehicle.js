const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
      trim: true,
      match: /^[a-zA-Z0-9- ]+$/,
    },
    model: {
      type: String,
      required: true,
      trim: true,
      match: /^[a-zA-Z0-9- ]+$/,
    },
    year: {
      type: Number,
      required: true,
      min: 1960,
      max: new Date().getFullYear(),
    },
    status: {
      type: String,
      enum: ['available', 'maintenance', 'in_service'],
      default: 'available',
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Vehicle', vehicleSchema);
