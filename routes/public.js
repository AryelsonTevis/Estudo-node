import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

async function authRoutes(fastify) {

  //cadastro
  fastify.post("/cadastro", async (request, reply) => {
      try {

        const user = request.body;

        const salt = await bcrypt.genSalt(10);
        const senhaHash = await bcrypt.hash(user.senha, salt);

        const userDB = await prisma.user.create({
          data: {
            nome: user.nome,
            email: user.email,
            senha: senhaHash,
          },
        });

        reply.status(201).send(userDB);

      } catch (err) {
        reply.status(500).send({ 
          message: "Erro no servidor, tente novamente" 
        });

      }
    });

    //Logar
    fastify.post("/login", async (request, reply) => {
      try {

        const userInfo = request.body;

        //Busca usuario no banco de dados
        const user = await prisma.user.findUnique({
          where: { email: userInfo.email },
        });

        //Verifica se usuario existe
        if (!user) {
          return reply.status(404).send({ message: "Usuario não encontrado" });
        }

        //compara as senhas
        const passwordMatch = await bcrypt.compare(userInfo.senha, user.senha);

        if (!passwordMatch) {
          return reply.status(400).send({ message: "Senha incorreta" });
        }

        //Gerar jwt
        const token = jwt.sign({ id: user.id, nome: user.nome }, JWT_SECRET, {
          expiresIn: "7d",
        });

        reply.status(200).send(user);
      } catch (err) {
        reply
          .status(500)
          .send({ message: "Erro no servidor, tente novamente" });
      }
    });
}

export default authRoutes;
