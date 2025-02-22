import { Router } from "express";
import {
  getUsers,
  getUserById,
  createUser,
} from "../controllers/users.controller";

const router = Router();

router.get("/", getUsers);
router.get("/id/:userId", getUserById);
router.post("/", createUser);

export const usersRouter = router;
