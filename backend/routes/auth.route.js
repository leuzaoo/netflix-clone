import {
  authCheck,
  login,
  logout,
  signup,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";
import express from "express";

const router = express.Router();

router.post("/signup", signup);
router.post("/logout", logout);
router.post("/login", login);

router.get("/authCheck", protectRoute, authCheck);

export default router;
