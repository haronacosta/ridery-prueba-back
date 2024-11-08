const jwt = require('jsonwebtoken');

exports.authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({
      success: false,
      status: 401,
      message: 'Se necesita un token valido para acceder a este recurso',
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        status: 401,
        message: 'El token ha expirado',
      });
    } else if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({
        success: false,
        status: 401,
        message: 'El token no es válido',
      });
    } else if (err.name === 'NotBeforeError') {
      return res.status(401).json({
        success: false,
        status: 401,
        message: 'El token no es válido aún',
      });
    } else {
      return res.status(500).json({
        success: false,
        status: 500,
        message: 'Error del servidor',
      });
    }
  }
};
