const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  intensity: Number,
  likelihood: Number,
  relevance: Number,
  year: Number,
  end_year: Number,
  country: String,
  topic: String,
  region: String,
  city: String,
  sector: String,
  pestle: String,
  source: String,
  swot: String,
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
