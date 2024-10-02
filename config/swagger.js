const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Importar los esquemas
const institucionSchema = require('../models/schemas/institucionSchema');
const departamentosSchema = require('../models/schemas/departamentoSchema');
const municipiosSchema = require('../models/schemas/municipioSchema');

// Opciones de configuración de Swagger
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "API Instituciones",
            version: "1.0.0",
            description: "API para gestionar instituciones, estudiantes, profesores, etc.",
            contact: {
                name: "API Support",
                url: "http://localhost:5000",
                email: "rguardod14@gmail.com.com",
            },
        },
        components: {
            schemas: {
                Institucion: institucionSchema.Institucion,
                Departamento: departamentosSchema,
                Municipio: municipiosSchema,
            },
        },
        servers: [
            {
                url: "http://localhost:5000",
            },
        ],
    },
    apis: [
        "../routes/institucionRoutes.js",
        "../routes/departamentoRoutes.js",
        "../routes/municipioRoutes.js"
    ]
};

// Configuración de Swagger
const swaggerDocs = swaggerJsDoc(swaggerOptions);

const setupSwagger = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

module.exports = setupSwagger;
