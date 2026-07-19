const express = require('express');
const router = express.Router();
const cakes = require('../data/cakes');

// GET /api/cakes -> all categories
router.get('/', (req, res) => {
  res.json(cakes);
});

// GET /api/cakes/:category -> birthday | wedding | theme
router.get('/:category', (req, res) => {
  const category = req.params.category.toLowerCase();
  if (!cakes[category]) {
    return res.status(404).json({ error: `Unknown category "${category}"` });
  }
  res.json(cakes[category]);
});

module.exports = router;
