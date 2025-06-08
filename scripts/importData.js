const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Data = require('../models/DataModel');

mongoose.connect(process.env.MONGO_URI ||'mongodb://localhost:27017/datadb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const rawData = fs.readFileSync('jsondata.json');
const jsonData = JSON.parse(rawData);

Data.insertMany(jsonData)
  .then(() => {
    console.log('Data imported!');
    mongoose.connection.close();
  })
  .catch((err) => console.error(err));

