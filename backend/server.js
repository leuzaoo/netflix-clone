import cookieParser from "cookie-parser";
import express from "express";

import { protectRoute } from "./middleware/protectRoute.js";
import { connectDB } from "./config/dbConnection.js";
import movieRoutes from "./routes/movie.route.js";
import authRoutes from "./routes/auth.route.js";
import { ENV_VARS } from "./config/envVars.js";
import tvRoutes from "./routes/tv.route.js";

const app = express();

const PORT = ENV_VARS.PORT;

app.use(express.json()); // nos permitirá analisar req.body
app.use(cookieParser());

app.use("/api/v1/tv", protectRoute, tvRoutes); // executará protectRoute primeiro
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes); // executará protectRoute primeiro
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  connectDB();
});
