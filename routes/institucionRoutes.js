const express = require('express');
const router = express.Router();
const {
    getInstituciones,
    createInstitucion,
    getInstitucionById,
    updateInstitucion,
    deleteInstitucion
} = require('../controllers/institucionController');

// Rutas de las instituciones
router.get('/', getInstituciones);
router.post('/', createInstitucion);
router.get('/:id', getInstitucionById);
router.put('/:id', updateInstitucion);
router.delete('/:id', deleteInstitucion);

module.exports = router;
