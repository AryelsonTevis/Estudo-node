import authController from "../controllers/authController.js";

async function authRoutes(fastify) {
  //cadastro
  fastify.post("/cadastro", authController.register);

  //Logar
  fastify.post("/login", authController.login);
}

export default authRoutes;
