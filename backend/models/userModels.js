import { prisma } from "../lib/prisma.js";

const userModel = {
  async create({ nome, email, senha }) {
    return prisma.user.create({
      data: {
        nome,
        email,
        senha,
      },
    });
  },

  async findByEmail(email) {
    return prisma.user.findUnique({
      where: { email },
    });
  },
  async delete(id) {
    return prisma.user.delete({
      where: { id },
    });
  },
};

export default userModel;
