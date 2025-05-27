"use client";

import QuizCard from "@/components/pages/quiz/QuizCard";
import { QuizType } from "@wizzle-demo/shared";

const QuizGrid = ({ quizzes }: { quizzes: QuizType[] }) => {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Latest Quizzes</h2>
      {/* Category Selection */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(232px,1fr))] gap-2">
        {quizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
        {quizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
        {quizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default QuizGrid;
