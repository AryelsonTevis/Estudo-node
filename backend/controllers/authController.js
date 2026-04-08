import authService from "../services/authService.js";

const authController = {
  //Cadastro
  async register(request, reply) {
    try {
      const { nome, email, senha } = request.body;

      const user = await authService.register({ nome, email, senha });
      return reply.status(201).send({ message: "Usuario cadastrado", user });
    } catch (err) {
      return reply.status(400).send({ message: err.message });
    }
  },
  async login(request, reply) {
    try {
      const { email, senha } = request.body;

      const user = await authService.login({ email, senha });
      return reply.status(201).send({ message: "Usuario logado", user });
    } catch (err) {
      return reply.status(400).send({ message: err.message });
    }
  },
};

export default authController;
