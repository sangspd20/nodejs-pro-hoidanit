import express from 'express';
import 'dotenv/config';
// const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello Sang vssss');
});

app.listen(PORT, () => {
  console.log(`My app is running on port ${PORT}`);
});
