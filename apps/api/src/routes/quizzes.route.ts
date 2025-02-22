import { Router } from "express";
import {
  getQuizzes,
  getQuizById,
  getQuizzesByUserId,
  createQuiz,
} from "../controllers/quizzes.controller";

const router = Router();

router.get("/", getQuizzes);
router.get("/id/:quizId", getQuizById);
router.get("/user/:userId", getQuizzesByUserId);
router.post("/", createQuiz);

export const quizzesRouter = router;
