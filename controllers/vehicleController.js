const Vehicle = require('../models/Vehicle');

exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error al obtener los vehículos', error: err });
  }
};

exports.createVehicle = async (req, res) => {
  console.log(req.user.id);
  try {
    const vehicle = new Vehicle({
      ...req.body,
      createdBy: req.user.id,
    });
    await vehicle.save();
    res.status(201).json({ message: 'Vehículo creado exitosamente', vehicle });
  } catch (err) {
    res.status(500).json({ message: 'Error al crear el vehículo', error: err });
  }
};

exports.updateVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await Vehicle.findByIdAndUpdate(
      id,
      {
        ...req.body,
        updatedBy: req.user.id,
      },
      { new: true }
    );
    if (!vehicle) {
      return res.status(404).json({ message: 'Vehículo no encontrado' });
    }
    res.json({ message: 'Vehículo actualizado exitosamente', vehicle });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error al actualizar el vehículo', error: err });
  }
};

exports.deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await Vehicle.findByIdAndDelete(id);
    if (!vehicle) {
      return res.status(404).json({ message: 'Vehículo no encontrado' });
    }
    res.json({ message: 'Vehículo eliminado exitosamente' });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error al eliminar el vehículo', error: err });
  }
};

exports.getVehicleById = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await Vehicle.findById(id);
    if (!vehicle) {
      return res.status(404).json({ message: 'Vehículo no encontrado' });
    }
    res.json(vehicle);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error al obtener el vehículo', error: err });
  }
};
