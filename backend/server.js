import express from "express";

import { connectDB } from "./config/dbConnection.js";
import { ENV_VARS } from "./config/envVariables.js";
import authRoutes from "./routes/auth.router.js";

const app = express();
const PORT = ENV_VARS.PORT;

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  connectDB();
});
