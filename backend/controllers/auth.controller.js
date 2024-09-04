import { generateTokenAndSetCookie } from "../utils/generateToken.js";
import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export async function signup(req, res) {
  try {
    const { username, email, password } = req.body;

    if (!email || !password || !username) {
      return res
        .status(400)
        .json({ success: false, message: "Todos os campos são obrigatórios." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Email inválido." });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "A senha deve conter no mínimo 6 caracteres.",
      });
    }

    const existingUserByEmail = await User.findOne({ email: email });

    if (existingUserByEmail) {
      return res
        .status(400)
        .json({ success: false, message: "Email em uso, utilize outro." });
    }

    const existingUserByUsername = await User.findOne({ username: username });

    if (existingUserByUsername) {
      return res
        .status(400)
        .json({ success: false, message: "Nome de usuário já existente." });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];

    const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];

    const newUser = new User({
      email,
      password: hashedPassword,
      username,
      image,
    });

    generateTokenAndSetCookie(newUser._id, res); // Irá gerar o Token e salvar nos Cookies quando for criado o usuário

    await newUser.save(); // Salva o usuário se tiver tudo certo com os campos preenchidos

    // Remove a senha da resposta devolvida pelo servidor
    res.status(201).json({
      success: true,
      user: {
        ...newUser._doc,
        password: "",
      },
    });
    //Caso houver algum erro no servidor (não necessariamente com os campos preenchidos pelo usuário)
  } catch (error) {
    console.log("Erro no controlador de criação de conta:", error.message);
    res
      .status(500)
      .json({ success: false, message: "Erro no servidor interno." });
  }
}

export async function login(req, res) {
  res.send("Login route");
}

export async function logout(req, res) {
  try {
    res.clearCookie("jwt-netflix");
    res.status(200).json({ success: true, message: "Você saiu da sua conta." });
  } catch (error) {
    console.log("Erro no controlador de logout:", error.message);
    res
      .status(500)
      .json({ success: false, message: "Erro no servidor interno." });
  }
}
