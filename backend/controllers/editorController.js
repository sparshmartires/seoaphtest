const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, '../data/editorContent.json');

// Save content to a file
const saveContent = (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: 'Content is required' });
  }

  fs.writeFile(FILE_PATH, JSON.stringify({ content }), 'utf8', (err) => {
    if (err) {
      console.error('Error saving content:', err);
      return res.status(500).json({ error: 'Failed to save content' });
    }
    res.status(200).json({ message: 'Content saved successfully' });
  });
};

// Load content from a file
const loadContent = (req, res) => {
  if (!fs.existsSync(FILE_PATH)) {
    return res.status(200).json({ content: '' }); // Empty content if file doesn't exist
  }

  fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Error loading content:', err);
      return res.status(500).json({ error: 'Failed to load content' });
    }

    const parsedData = JSON.parse(data);
    res.status(200).json({ content: parsedData.content || '' });
  });
};

module.exports = { saveContent, loadContent };
