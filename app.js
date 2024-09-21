const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('../api-instituciones/config/db');
const swaggerDocs = require('../api-instituciones/config/swagger'); 

dotenv.config();
const app = express();

// Conectar a la base de datos
connectDB();

// Middleware para analizar JSON
app.use(express.json());

// Definir rutas
const institucionRoutes = require('../api-instituciones/routes/institucionRoutes');
app.use('/api/instituciones', institucionRoutes);

// Iniciar Swagger en el puerto 5000
swaggerDocs(app);

// Definir puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
