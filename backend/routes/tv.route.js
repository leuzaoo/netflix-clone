import express from "express";
import {
  getSimilarTv,
  getTrendingTv,
  getTvDetails,
  getTvsByCategory,
  getTvTrailers,
} from "../controllers/tv.controller.js";

const router = express.Router();

router.get("/trending", getTrendingTv);
router.get("/:id/details", getTvDetails);
router.get("/:id/similar", getSimilarTv);
router.get("/:category", getTvsByCategory);
router.get("/:id/trailers", getTvTrailers);

export default router;
