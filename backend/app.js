import publicRoutes from "./routes/public.js";
import privateRoutes from "./routes/private.js";

async function app(fastify) {
  fastify.register(publicRoutes);
  fastify.register(privateRoutes);
}

export default app;
