const jwt = require('jsonwebtoken')
const Users = require('../databases/orm/models/Users.js');

// middleware para validar el token (rutas protegidas)
const verifyToken = async (req, res, next) => {
  // Verificar si el token existe en las cookies de sesión o en el encabezado de autorización
  const token = req.session.token || req.header('Authorization');
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // verificar si el token es válido
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await Users.findOne({ where: { id: decodedToken.id } });
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    res.user = user;
    // el usuario está autenticado
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Internal Server Error` });
  }
};

module.exports = verifyToken;
