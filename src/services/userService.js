import userModel from "../models/userModels.js";

async function getUsers() {
  return userModel.findByEmail(email);
}
