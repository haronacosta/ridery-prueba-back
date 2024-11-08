const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const connectDB = require('./config/db');

require('dotenv').config();

const app = express();

require('dotenv').config();

connectDB();

app.use(express.json());

// Middleware para habilitar CORS
app.use(cors({ origin: '*' }));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/vehicles', require('./routes/vehicleRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
