import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "./models/User.js";

const router = express.Router();

const JWT_SECRET = "your_jwt_secret_key";

// Registrar un nuevo usuario
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Usuario y contraseña requeridos" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, password: hashedPassword });
    res.status(201).json({ message: "Te has registrado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al registrar el usuario" });
  }
});

// Iniciar sesión
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("Body recibido:", req.body);

  if (!email || !password) {
    return res.status(400).json({ error: "Usuario y contraseña requeridos" });
  }

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("¿Contraseña válida?", isPasswordValid);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }

    const token = jwt.sign(
      { userId: user.userId, email: user.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({
      message: "Inicio de sesión exitoso",
      token,
      user: {
        email: user.email,
        rol: user.rol ?? "undefined", // solo si usas roles
        avatarPicture: user.avatarPicture,
      },
    });
  } catch (error) {
    console.error("Error en login:", error); // 👈 importante para depuración
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
});

export default router;
