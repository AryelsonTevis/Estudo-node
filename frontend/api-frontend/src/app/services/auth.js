import { api } from "./api";

export async function login(email, senha) {
  try {
    const response = await api.post("/login", { email, senha });
    return response.data;
  } catch (error) {
    throw error.response?.data || { mesage: "Erro ao realizar o login" };
  }
}
