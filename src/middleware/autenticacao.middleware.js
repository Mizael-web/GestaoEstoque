const jwt = require('jsonwebtoken');


class AutenticacaoMiddleware {
  static autenticarToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ msg: 'Token não fornecido' });
    }
    const token = authHeader.split(' ')[1]; // Espera formato "Bearer TOKEN"

    if (!token) {
      return res.status(401).json({ msg: 'Token não fornecido' });
    }

    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.usuario = decoded; // dados do usuário ficam disponíveis no req.usuario
      next();
    } catch (err) {
      return res.status(401).json({ msg: 'Token inválido' });
    }
  }
}
module.exports = AutenticacaoMiddleware;
