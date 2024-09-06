import {
  getMovieTrailers,
  getTrendingMovie,
} from "../controllers/movie.controller.js";
import express from "express";

const router = express.Router();

router.get("/trending", getTrendingMovie);
router.get("/:id/trailers", getMovieTrailers);

export default router;
