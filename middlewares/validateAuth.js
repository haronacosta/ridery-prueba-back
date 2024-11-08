const validateUserData = require('../services/userValidationService');

const validateAuth = (isRegistration = false) => {
  return (req, res, next) => {
    const errors = validateUserData(req.body, isRegistration);

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
};

module.exports = validateAuth;
