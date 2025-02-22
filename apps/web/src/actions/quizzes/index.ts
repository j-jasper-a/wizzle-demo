import { auth } from "@/firebase/config";
import { QuizType } from "@wizzle-demo/shared";

const createQuiz = async (quiz: QuizType) => {
  try {
    const user = auth.currentUser;

    if (!user) {
      throw new Error("User not authenticated");
    }

    const idToken = await user.getIdToken();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WIZZLE_API_URL}/quizzes`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify(quiz),
      },
    );

    if (!response.ok) throw new Error("Failed to create quiz");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating quiz:", error);
  }
};

export { createQuiz };
