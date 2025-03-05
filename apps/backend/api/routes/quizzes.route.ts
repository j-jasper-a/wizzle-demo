import { getQuizzes } from "../controllers/quizzes.controller";
import { Router } from "express";

const router = Router();

router.get("/", getQuizzes);

export const quizzesRouter = router;
