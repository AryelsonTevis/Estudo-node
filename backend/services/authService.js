import userModel from "../models/userModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const authService = {
  validEmail(email) {
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!reg.test(email)) {
      const error = new Error("Email inválido");
      error.statusCode = 400;
      throw error;
    }
  },
  async register({ nome, email, senha }) {
    this.validEmail(email);
    const hash = await bcrypt.hash(senha, 10);

    return userModel.create({
      nome,
      email,
      senha: hash,
    });
  },
  async login({ email, senha }) {
    this.validEmail(email);
    try {
      const user = await userModel.findByEmail(email);

      //Verifica se usuario existe
      if (!user) {
        throw new Error("Usuario não encontrado");
      }
      //compara as senhas
      const passwordMatch = await bcrypt.compare(senha, user.senha);

      if (!passwordMatch) {
        throw new Error("Senha incorreta");
      }
      //Gerar jwt
      const token = jwt.sign({ id: user.id, nome: user.nome }, JWT_SECRET, {
        expiresIn: "7d",
      });
      return token;
    } catch (err) {
      console.log(err);
      throw new Error("Erro no servidor, tente novamente");
    }

    return token;
  },
};

export default authService;
