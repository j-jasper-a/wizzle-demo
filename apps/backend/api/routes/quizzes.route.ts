import {
  getQuizzes,
  getQuizById,
  getQuizBySlug,
  getQuizzesByUserId,
} from "../controllers/quizzes.controller";
import { Router } from "express";

const router = Router();

router.get("/", getQuizzes);
router.get("/id/:quizId", getQuizById);
router.get("/slug/:quizSlug", getQuizBySlug);
router.get("/user/:userId", getQuizzesByUserId);

export const quizzesRouter = router;
