const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const institucionRoutes = require('./routes/institucionRoutes');

dotenv.config();

// Conectar a la base de datos
connectDB();

const app = express();
app.use(express.json());

// Rutas
app.use('/api/instituciones', institucionRoutes);

const PORT = process.env
