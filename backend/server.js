import express from "express";

import { connectDB } from "./config/dbConnection.js";
import movieRoutes from "./routes/movie.route.js";
import authRoutes from "./routes/auth.route.js";
import { ENV_VARS } from "./config/envVars.js";

const app = express();

const PORT = ENV_VARS.PORT;

app.use(express.json()); // will allow us to parse req.body

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", movieRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  connectDB();
});
