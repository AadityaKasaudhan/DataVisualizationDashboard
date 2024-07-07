const mongoose = require('mongoose');
const csv = require('csv-parser');
const fs = require('fs');
const Data = require('./models/dataModel');
const db = require('./config/db');

db();

const loadData = () => {
  const results = [];

  fs.createReadStream(__dirname + '/data.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      try {
        await Data.insertMany(results);
        console.log('Data successfully loaded');
        mongoose.connection.close();
      } catch (error) {
        console.error('Error loading data:', error);
      }
    });
};

loadData();
