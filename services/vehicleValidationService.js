const validateVehicleData = (data) => {
  const { brand, model, year, status } = data;

  const errors = [];
  if (!brand || typeof brand !== 'string' || !/^[a-zA-Z0-9 ]+$/.test(brand)) {
    errors.push('Marca es obligatoria y debe contener solo letras y números');
  }
  if (!model || typeof model !== 'string' || !/^[a-zA-Z0-9 ]+$/.test(model)) {
    errors.push('Modelo es obligatorio y debe contener solo letras y números');
  }
  const currentYear = new Date().getFullYear();
  if (!year || year < 1886 || year > currentYear) {
    errors.push(`Año es obligatorio y debe estar entre 1886 y ${currentYear}`);
  }
  const validStatuses = ['available', 'maintenance', 'in_service'];
  if (!status || !validStatuses.includes(status)) {
    errors.push(
      'Estado es obligatorio y debe ser uno de los siguientes: available, maintenance, in_service'
    );
  }
  return errors;
};
module.exports = validateVehicleData;
