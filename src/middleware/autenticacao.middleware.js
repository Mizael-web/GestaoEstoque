<<<<<<< HEAD

const jwt = require('jsonwebtoken');

=======
const jwt = require('jsonwebtoken');


>>>>>>> 859f562fd4d0bc56ae2e4a681a70bf0f7fe540f5
class AutenticacaoMiddleware {
  static autenticarToken(req, res, next) {
    const authHeader = req.headers.authorization;

<<<<<<< HEAD
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

=======
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
>>>>>>> 859f562fd4d0bc56ae2e4a681a70bf0f7fe540f5
module.exports = AutenticacaoMiddleware;
