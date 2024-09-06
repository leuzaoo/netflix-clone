import { getTrendingMovie } from "../controllers/movie.controller.js";
import express from "express";

const router = express.Router();

router.get("/trending", getTrendingMovie);

export default router;
