"use client";

import H2 from "@/components/reusable/H2";
import Overline from "@/components/reusable/Overline";
import Subtitle from "@/components/reusable/Subtitle";
import Link from "next/link";
import { useEffect } from "react";
import {
  LuMessageCircleQuestion as QuestionIcon,
  LuTimer as MinutesIcon,
} from "react-icons/lu";

const QuizCard = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(
        //   "https://wizzle-demo-backend-git-dev-jasper-projects.vercel.app",
        // );
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_WIZZLE_API_URL}`,
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
    <Link href="/quiz/test">
      <div className="flex flex-col gap-4 rounded-xl bg-blue-100 p-4">
        <Overline>Technology</Overline>
        <H2>Find Out Your Character In Game of Thrones</H2>
        <div className="flex justify-between">
          <div>
            <QuestionIcon />
            <Subtitle>10 Questions</Subtitle>
          </div>
          <div>
            <MinutesIcon />
            <Subtitle>5 Minutes</Subtitle>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default QuizCard;
