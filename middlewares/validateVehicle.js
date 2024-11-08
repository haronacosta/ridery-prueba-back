const validateVehicleData = require('../services/vehicleValidationService');

const validateVehicle = (req, res, next) => {
  const errors = validateVehicleData(req.body);

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      status: 400,
      message: 'Errores de validación',
      errors,
    });
  }

  next();
};

module.exports = validateVehicle;
