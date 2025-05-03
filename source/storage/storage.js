// storage.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const STORAGE_FILE = '/data/storage'; // Mounted volume path

app.use(bodyParser.json());

app.post('/store', (req, res) => {
  const phrase = req.body.phrase;

  if (!phrase) {
    return res.status(400).send('Missing "phrase" in request.');
  }

  fs.appendFile(STORAGE_FILE, phrase + '\n', (err) => {
    if (err) {
      console.error('Failed to write to file:', err);
      return res.status(500).send('Storage error.');
    }
    res.send('Stored.');
  });
});

app.listen(3000, () => {
  console.log('Storage service running on port 3000');
});