import { PrismaClient } from "@prisma/client";
import auth from "../middlewares/auth.js";

const prisma = new PrismaClient();

async function privateRoutes(fastify) {
  fastify.addHook("preHandler", auth);

  fastify.get("/listar-usuarios", async (request, reply) => {
    try {
      const users = await prisma.user.findMany({
        select: { id: true, nome: true, email: true },
      });
      reply
        .status(200)
        .send({ message: "Usuarios listados com sucesso", users: users });
    } catch (err) {
      reply.status(500).send({ message: "Falha no servidor" });
    }
  });
}
export default privateRoutes;
