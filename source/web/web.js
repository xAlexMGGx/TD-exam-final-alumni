// web.js
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const path = require('path');

//app.use(bodyParser.json());

// Parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static index.html from "templates" folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

const STORAGE_SVC_HOST = process.env.STORAGE_SVC; // Kubernetes service name

app.post('/phrase', async (req, res) => {
  const phrase = req.body.phrase;

  if (!phrase) {
    return res.status(400).send('Missing "phrase" in request body.');
  }

  const wordCount = phrase.trim().split(/\s+/).length;
  const instance = wordCount % 2 === 0 ? '0' : '1';
  const url = `http://${STORAGE_SVC_HOST}-${instance}.storage:3000/store`;

  try {
    await axios.post(url, { phrase });
    res.send('Phrase routed and stored successfully in ' + STORAGE_SVC_HOST + '-' + instance);
  } catch (err) {
    console.error('Error posting to storage:', err.message);
    res.status(500).send('Error sending phrase to storage');
  }
});

app.get('/probe', async (req, res) => {
  try {
    res.send('Service is alive');
  } catch (err) {
    res.status(500).send('Error whilst processing the probing request');
  }
});

app.listen(3000, () => {
  console.log('Web service running on port 3000');
});
