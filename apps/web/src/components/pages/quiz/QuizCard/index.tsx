"use client";

import H2 from "@/components/reusable/H2";
import Overline from "@/components/reusable/Overline";
import Subtitle from "@/components/reusable/Subtitle";
import { QuizType } from "@wizzle-demo/shared";
import Link from "next/link";
import { useEffect } from "react";
import {
  LuMessageCircleQuestion as QuestionIcon,
  LuTimer as MinutesIcon,
} from "react-icons/lu";

const QuizCard = ({ quiz }: { quiz: QuizType }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_WIZZLE_API_URL}/users`,
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };

    fetchData();
  }, []);

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
