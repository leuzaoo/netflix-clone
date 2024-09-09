import { ENV_VARS } from "../config/envVars.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies["jwt-netflix"];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Não autorizado. Nenhum token fornecido.",
      });
    }

    const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET);

    if (!decoded) {
      return res
        .status(401)
        .json({ success: fals, message: "Não autorizado. Token inválido." });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Usuário não encontrado." });
    }

    req.user = user;

    next(); // Dando certo acima, chama a próxima função em server.js
  } catch (error) {
    console.log("Erro no middleware 'protectRoute':", error.message);
    res
      .status(500)
      .json({ success: false, message: "Erro no servidor interno." });
  }
};
