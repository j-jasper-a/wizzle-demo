import QuizComponent from "@/components/pages/quiz/QuizComponent";
import quizzes from "@/data/quizzes";

type PageProps = {
  params: Promise<{ quizId: string }>;
};

const Home = async ({ params }: PageProps) => {
  const { quizId } = await params;
  const activeQuiz = quizzes.find((quiz) => quiz.id === quizId);

  if (!activeQuiz) {
    return <div>Quiz not found</div>;
  }

  return <QuizComponent quiz={activeQuiz} />;
};

export default Home;
