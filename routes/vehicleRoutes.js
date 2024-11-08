const express = require('express');
const router = express.Router();
const {
  getAllVehicles,
  createVehicle,
  updateVehicle,
  deleteVehicle,
  getVehicleById,
} = require('../controllers/vehicleController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const validateVehicle = require('../middlewares/validateVehicle');

// Proteger todas las rutas con authMiddleware y validar los datos con validateVehicle donde sea necesario
router.get('/', authMiddleware, getAllVehicles);
router.post('/', authMiddleware, validateVehicle, createVehicle);
router.put('/:id', authMiddleware, validateVehicle, updateVehicle);
router.delete('/:id', authMiddleware, deleteVehicle);
router.get('/:id', authMiddleware, getVehicleById);

module.exports = router;
