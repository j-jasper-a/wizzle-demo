"use client";

import H2 from "@/components/to-be-decided/H2";
import Overline from "@/components/to-be-decided/Overline";
import Subtitle from "@/components/to-be-decided/Subtitle";
import { QuizType } from "@wizzle-demo/shared";
import Link from "next/link";
import {
  LuMessageCircleQuestion as QuestionIcon,
  LuTimer as MinutesIcon,
} from "react-icons/lu";

const QuizCard = ({ quiz }: { quiz: QuizType }) => {
  return (
    <Link href={`/quiz/${quiz.id}`}>
      <div className="flex h-full flex-col gap-4 rounded-xl bg-blue-100 p-4">
        <Overline>{quiz.category}</Overline>
        <H2>{quiz.title}</H2>
        <div className="flex justify-between">
          <div className="flex items-center gap-1 text-neutral-600">
            <QuestionIcon />
            <Subtitle>{quiz.questions.length}</Subtitle>
          </div>
          <div className="flex items-center gap-1 text-neutral-600">
            <MinutesIcon />
            <Subtitle>{Math.round(quiz.questions.length * 0.5)}</Subtitle>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default QuizCard;
