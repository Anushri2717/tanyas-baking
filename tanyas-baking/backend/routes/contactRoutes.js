const express = require('express');
const router = express.Router();
const { submitContact, getSubmissions } = require('../controllers/contactController');

// POST /api/contact -> submit an enquiry/order
router.post('/', submitContact);

// GET /api/contact -> (admin) view all submissions
router.get('/', getSubmissions);

module.exports = router;
