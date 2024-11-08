const validateUserData = (data, isRegistration = false) => {
  const { email, password, confirm_password, name } = data;
  const errors = [];

  // Validar correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
    errors.push({ email: 'Correo electrónico no es válido' });
  }

  // Validar nombre (solo en registro)
  if (
    isRegistration &&
    (!name || typeof name !== 'string' || name.length < 2)
  ) {
    errors.push({
      name: 'Nombre es obligatorio y debe tener al menos 2 caracteres',
    });
  }

  // Validar contraseña
  if (!password || typeof password !== 'string' || password.length < 6) {
    errors.push({ password: 'Contraseña debe tener al menos 6 caracteres' });
  }

  // Validar confirmación de contraseña (solo en registro)
  if (isRegistration && (password !== confirm_password || !confirm_password)) {
    errors.push({ password_confirm: 'Las contraseñas no coinciden' });
  }

  return errors;
};

module.exports = validateUserData;
