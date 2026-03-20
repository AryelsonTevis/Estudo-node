import Fastify from "fastify";
import app from "./app.js";

const fastify = Fastify();

fastify.register(app);

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  console.log(`Servidor rodando `);
});
