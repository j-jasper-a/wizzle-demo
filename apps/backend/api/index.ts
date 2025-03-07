import express, { Request, Response } from "express";
import admin from "firebase-admin";
import { quizzesRouter } from "./routes/quizzes.route";
import dotenv from "dotenv";
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

const allowCors = (fn: Function) => async (req: Request, res: Response) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  return await fn(req, res);
};

const app = express();

app.use(express.json());

app.use("/quizzes", quizzesRouter);
app.use("/users", usersRouter);

app.get("/", (request: Request, response: Response) => {
  response.status(200).json({
    message: "Hello from Firebase!",
  });
});

const handler = (request: Request, response: Response) =>
  app(request, response);

export default allowCors(handler);
