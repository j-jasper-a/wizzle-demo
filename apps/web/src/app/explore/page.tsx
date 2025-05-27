import QuizGrid from "@/components/to-be-decided/QuizGrid";
import quizzes from "@/data/quizzes";

const Home = () => {
  return (
    <div className="max-w-(--breakpoint-lg) mx-auto px-4">
      <p className="text-center text-sm font-semibold uppercase text-blue-700">
        Latest Quizzes
      </p>
      <QuizGrid quizzes={quizzes} />
    </div>
  );
};

export default Home;
