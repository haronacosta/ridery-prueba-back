const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

const User = require('../models/User');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user)
      return res.status(400).json({ msg: 'El correo electronico no existe' });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ msg: 'Contraseña incorrecta' });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET
    );
    res.json({
      token,
      user: { id: user._id, email: user.email, name: user.name },
    });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

exports.register = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user)
      return res
        .status(400)
        .json({ msg: 'El correo electronico ya se encuentra registrado' });

    user = new User({ email, password, name });

    await user.save();

    res.status(201).json({ msg: 'Usuario creado correctamente' });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

exports.me = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      const err = new Error('Usuario no encontrado');
      err.name = 'NotFoundError';
      err.status = 404;
      return next(err);
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
