const AuthService = require('../../services/auth.service');
const service = new AuthService(); // servicio de autenticacion
const login = async (_, { email, password }, context) => {
  // recibimos el context de graphql-strategy o graphql-passport
  const { user } = await context.authenticate('graphql-local', {
    email,
    password,
  });
  console.log('service.signToken(user): ', service.signToken(user));
  return service.signToken(user); //utilizamos el servicio de auth para crear nuestro jwt
  // y enviar la info del login
};

module.exports = { login };
