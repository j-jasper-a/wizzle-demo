import QuizCard from "@/components/quiz/QuizCard";
import Link from "next/link";

const QuizGrid = () => {
  return (
    <section>
      <p className="text-center text-sm font-semibold uppercase text-blue-700">
        Latest Quizzes
      </p>
      <div className="flex items-center justify-between">
        <Link href="/quiz">Explore Quizzes</Link>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(232px,1fr))] gap-2">
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
      </div>
    </section>
  );
};

export default QuizGrid;
