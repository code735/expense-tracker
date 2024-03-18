const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
