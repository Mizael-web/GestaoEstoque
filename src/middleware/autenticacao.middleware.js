
const jwt = require('jsonwebtoken');

class AutenticacaoMiddleware {
  static autenticarToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ msg: 'Token de autenticação ausente ou mal formatado' });
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.usuario = decoded; // dados decodificados disponíveis para as rotas seguintes
      next();
    } catch (err) {
      return res.status(401).json({ msg: 'Token inválido ou expirado', erro: err.message });
    }
  }
}

module.exports = AutenticacaoMiddleware;
