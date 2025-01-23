const express = require('express');
const { saveContent, loadContent } = require('../controllers/editorController');

const router = express.Router();

// Route to save content
router.post('/save', saveContent);

// Route to load content
router.get('/load', loadContent);

module.exports = router;
