const express = require('express');
const cors = require('cors');
const dataRoutes = require('./routes/dataRoutes');
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

db();

app.use(cors());
app.use(express.json());
app.use('/api/data', dataRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
