const express = require('express');
const app = express();
const port = 5000;
const dotenv = require('dotenv').config()

app.use(express.json());

app.listen(port, () => {
  console.log(`Github ID app is running on port ${port}.`);
});

const api = require('./api');

app.get('/github/', api.githubIdAll);
