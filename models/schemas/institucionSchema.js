/**
 * @swagger
 * components:
 *   schemas:
 *     Institucion:
 *       type: object
 *       required:
 *         - nombre
 *         - direccion
 *         - telefono
 *         - email
 *         - director
 *         - iddepartamento
 *         - idmunicipio
 *         - estado
 *         - idsecretaria
 *         - nosedes
 *       properties:
 *         nombre:
 *           type: string
 *           description: El nombre de la institución
 *         direccion:
 *           type: string
 *           description: La dirección física de la institución
 *         telefono:
 *           type: string
 *           description: El número de teléfono de la institución
 *         email:
 *           type: string
 *           format: email
 *           description: El correo electrónico de la institución
 *         director:
 *           type: string
 *           description: El nombre del director de la institución
 *         iddepartamento:
 *           type: integer
 *           description: El identificador del departamento donde se ubica la institución
 *         idmunicipio:
 *           type: integer
 *           description: El identificador del municipio donde se ubica la institución
 *         estado:
 *           type: string
 *           description: El estado actual de la institución (activo, inactivo, etc.)
 *         idsecretaria:
 *           type: integer
 *           description: El identificador de la secretaría de educación asociada
 *         nosedes:
 *           type: integer
 *           description: Número de sedes que tiene la institución
 *       example:
 *         nombre: "Institución Educativa La Esperanza"
 *         direccion: "Calle 123 #45-67"
 *         telefono: "123456789"
 *         email: "contacto@institucion.edu.co"
 *         director: "Carlos Pérez"
 *         iddepartamento: 5
 *         idmunicipio: 102
 *         estado: "activo"
 *         idsecretaria: 12
 *         nosedes: 3
 */

module.exports = {
    Institucion: {
        type: "object",
        properties: {
            nombre: { type: "string" },
            direccion: { type: "string" },
            telefono: { type: "string" },
            email: { type: "string", format: "email" },
            director: { type: "string" },
            iddepartamento: { type: "integer" },
            idmunicipio: { type: "integer" },
            estado: { type: "string" },
            idsecretaria: { type: "integer" },
            nosedes: { type: "integer" },
        },
    },
};
