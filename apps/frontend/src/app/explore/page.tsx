import QuizGrid from "@/components/reusable/QuizGrid";
import quizzes from "@/example/quizzes";

const Home = () => {
  return (
    <div className="mx-auto max-w-screen-lg px-4">
      <p className="text-center text-sm font-semibold uppercase text-blue-700">
        Latest Quizzes
      </p>
      <QuizGrid quizzes={quizzes} />
    </div>
  );
};

export default Home;
