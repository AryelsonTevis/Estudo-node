import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const auth = async (request, reply) => {
  const auth = request.headers.authorization;

  if (!auth) {
    return reply.status(401).send({ message: "token não informado" });
  }
  const token = auth.split(" ")[1];
  if (!token) {
    return reply.status(401).send({ message: "token invalido" });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    request.userId = decoded.id;
  } catch (err) {
    return reply.status(401).send({
      message: "Token Ivalido",
    });
  }
};

export default auth;
