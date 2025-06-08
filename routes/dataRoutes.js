const express = require('express');
const router = express.Router();
const Data = require('../models/Data');

router.get('/', async (req, res) => {
  try {
    const filters = req.query;
    const data = await Data.find(filters);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;