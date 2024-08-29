import express from "express";
import authRoutes from "./routes/auth.router.js";

const app = express();
const PORT = 5000;

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
