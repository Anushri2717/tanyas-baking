require('dotenv').config();
const express = require('express');
const cors = require('cors');

const contactRoutes = require('./routes/contactRoutes');
const cakesRoutes = require('./routes/cakesRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple request logger
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
  next();
});

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/cakes', cakesRoutes);

app.get('/', (req, res) => {
  res.json({ message: "Tanya's Baking API is running" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong on the server' });
});

app.listen(PORT, () => {
  console.log(`Tanya's Baking API listening on http://localhost:${PORT}`);
});
