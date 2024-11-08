# RIDERY PRUEBA BACK

Este es una prueba para la vacanate de desarrollador fullstack en Ridery, proyecto de API de gestión de vehículos utilizando Node.js, Express y MongoDB.

## Desarrollado por

**Haron Acosta**

- [GitHub](https://github.com/haronacosta)
- [LinkedIn](https://www.linkedin.com/in/haronacosta/)
- [Correo Electrónico](mailto:haronacosta@proton.me)

## Tecnologías Utilizadas

- **Node.js**: Un entorno de ejecución para JavaScript en el servidor.
- **Express**: Un framework web minimalista para Node.js.
- **MongoDB**: Una base de datos NoSQL orientada a documentos.
- **Mongoose**: Una biblioteca para modelar datos en MongoDB.
- **JWT**: Para la autenticación y autorización de usuarios.

## Requisitos Previos

- Node.js y npm instalados en su sistema.
- MongoDB instalado y corriendo en su sistema o en un servicio en la nube como MongoDB Atlas.
- Archivo `.env` con las variables que se encuentran en el archivo .env.example

## Instalación

1. Clonar el repositorio:

```sh
git clone https://github.com/haronacosta/ridery-prueba-back.git
cd ridery-prueba-api
```

2.Instalar dependencias:

```sh
npm install
```

3.Configurar las variables de entorno en un archivo .env:

```sh
JWT_SECRET=llave_secreta_jwt
PORT=5000
MONGO_URI=url_mongo
```

4.Correr el seed de datos de prueba:

```sh
node db/seed.js
```

5.Iniciar el servidor:

```sh
node app.js
```

## Rutas

### Autenticación

```sh
POST /api/auth/register - Registrar un nuevo usuario.

POST /api/auth/login - Iniciar sesión.
```

### Vehículos

```sh
GET /api/vehicles - Obtener todos los vehículos (requiere autenticación).

POST /api/vehicles - Crear un nuevo vehículo (requiere autenticación).

PUT /api/vehicles/:id - Actualizar un vehículo por ID (requiere autenticación).

DELETE /api/vehicles/:id - Eliminar un vehículo por ID (requiere autenticación).

GET /api/vehicles/:id - Obtener un vehículo por ID (requiere autenticación).
```
