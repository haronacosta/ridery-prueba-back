require('dotenv').config();
const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

const User = require('../models/User');
const Vehicle = require('../models/Vehicle');

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Conectado a MongoDB');
    await seedUsers();
    await seedVehicles();
  })
  .catch((err) => console.error('Error al conectar a MongoDB', err));

// Crear usuarios de prueba
const seedUsers = async () => {
  try {
    const collectionInfo = await mongoose.connection.db
      .listCollections({ name: 'users' })
      .next();

    if (!collectionInfo) {
      await mongoose.connection.createCollection('users');
      console.log('La colección de usuarios creada');
    } else {
      await mongoose.connection.dropCollection('users');
      await mongoose.connection.createCollection('users');
      console.log('La colección de usuarios ha sido restaurada');
    }

    const users = [
      {
        name: 'Administrador',
        email: 'admin@mail.com',
        password: await bcrypt.hash('adminpassword', 10),
      },
      {
        name: 'Usuario de prueba',
        email: 'user@mail.com',
        password: await bcrypt.hash('userpassword', 10),
      },
    ];

    await User.insertMany(users);
    console.log('Usuarios de prueba creados');
    await mongoose.connection.close();
  } catch (err) {
    console.error('Error al crear usuarios de prueba', err);
    await mongoose.connection.close();
  }
};

const seedVehicles = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const collectionInfo = await mongoose.connection.db
    .listCollections({ name: 'vehicles' })
    .next();

  if (!collectionInfo) {
    await mongoose.connection.createCollection('vehicles');
    console.log('La colección de vehiculos creada');
  } else {
    await mongoose.connection.dropCollection('vehicles');
    await mongoose.connection.createCollection('vehicles');
    console.log('La colección de vehiculos ha sido restaurada');
  }

  const vehicles = [
    {
      brand: 'Toyota',
      model: 'Corolla',
      year: 2020,
      status: 'available',
      createdBy: '604b2f86fc13ae4566000230',
    },
    {
      brand: 'Honda',
      model: 'Civic',
      year: 2019,
      status: 'maintenance',
      createdBy: '604b2f86fc13ae4566000230',
    },
    {
      brand: 'Ford',
      model: 'Mustang',
      year: 2021,
      status: 'in_service',
      createdBy: '604b2f86fc13ae4566000230',
    },
    {
      brand: 'Chevrolet',
      model: 'Camaro',
      year: 2018,
      status: 'available',
      createdBy: '604b2f86fc13ae4566000230',
    },
    {
      brand: 'Tesla',
      model: 'Model S',
      year: 2022,
      status: 'available',
      createdBy: '604b2f86fc13ae4566000230',
    },
    {
      brand: 'BMW',
      model: '3 Series',
      year: 2017,
      status: 'maintenance',
      createdBy: '604b2f86fc13ae4566000230',
    },
    {
      brand: 'Audi',
      model: 'A4',
      year: 2019,
      status: 'in_service',
      createdBy: '604b2f86fc13ae4566000230',
    },
    {
      brand: 'Mercedes-Benz',
      model: 'C-Class',
      year: 2020,
      status: 'available',
      createdBy: '604b2f86fc13ae4566000230',
    },
    {
      brand: 'Volkswagen',
      model: 'Golf',
      year: 2018,
      status: 'maintenance',
      createdBy: '604b2f86fc13ae4566000230',
    },
    {
      brand: 'Nissan',
      model: 'Altima',
      year: 2021,
      status: 'in_service',
      createdBy: '604b2f86fc13ae4566000230',
    },
  ];

  await Vehicle.insertMany(vehicles);
  console.log('Vehiculos de prueba creados');

  await mongoose.connection.close();
};
