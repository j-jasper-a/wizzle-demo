import H2 from "@/components/reusable/H2";
import Overline from "@/components/reusable/Overline";
import Subtitle from "@/components/reusable/Subtitle";
import Link from "next/link";
import {
  LuMessageCircleQuestion as QuestionIcon,
  LuTimer as MinutesIcon,
} from "react-icons/lu";

const QuizCard = () => {
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
