import {
  getUsers,
  getUserById,
  createUser,
} from "../controllers/users.controller";

import { Router } from "express";

const router = Router();

router.get("/", getUsers);
router.get("/id/:userId", getUserById);
router.post("/", createUser);

export const usersRouter = router;
