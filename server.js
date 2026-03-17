import Fastify from "fastify";
import authRoutes from "./routes/public.js";

const fastify = Fastify({ logger: true });


fastify.register(authRoutes);

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  console.log(`Servidor rodando em ${address}`);
});
