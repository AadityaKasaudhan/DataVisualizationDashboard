const Data = require('../models/dataModel');

const getData = async (req, res) => {
  try {
    const { endYear, topic, sector, region, pest, source, swot, country, city } = req.query;

    let query = {};
    if (endYear) query.end_year = endYear;
    if (topic) query.topic = topic;
    if (sector) query.sector = sector;
    if (region) query.region = region;
    if (pest) query.pestle = pest;
    if (source) query.source = source;
    if (swot) query.swot = swot;
    if (country) query.country = country;
    if (city) query.city = city;

    const data = await Data.find(query);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getData };
