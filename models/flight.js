const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: { type: String },
  arrival: { type: Date, required: true }
}, {
  timestamps: true
});

const flightSchema = new Schema({
  airline: { type: String, required: true },
  airport: { type: String, required: true },
  flightNo: { type: Number, min: 10, max: 9999, required: true },
  departs: {
    type: Date, default: function () {
      return new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    },
  },
  destinations: [destinationSchema],
}, {
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);