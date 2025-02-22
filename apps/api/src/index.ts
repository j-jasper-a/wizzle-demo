import express, { Request, Response } from "express";
import admin from "firebase-admin";
import dotenv from "dotenv";
import cors from "cors";
import { quizzesRouter } from "./routes/quizzes.route";
import { usersRouter } from "./routes/users.route";

dotenv.config({ path: `.env.local` });

const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
};

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const db = admin.firestore();
export const auth = admin.auth();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/quizzes", quizzesRouter);
app.use("/users", usersRouter);

app.get("/", (request: Request, response: Response) => {
  response.status(200).json({
    message: "Hello from Firebase, Node 20!",
  });
});

export default app;
