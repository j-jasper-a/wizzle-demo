import {
  getUsers,
  getUserById,
  getUserByUsername,
  createUser,
} from "../controllers/users.controller";

import { Router } from "express";

const router = Router();

router.get("/", getUsers);
router.get("/id/:userId", getUserById);
router.get("/username/:username", getUserByUsername);
router.post("/", createUser);

export const usersRouter = router;
