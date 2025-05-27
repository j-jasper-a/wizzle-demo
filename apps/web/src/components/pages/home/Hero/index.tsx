import H1 from "@/components/to-be-decided/H1";
import Link from "next/link";
import {
  LuPen as CreateIcon,
  LuPlay as PlayIcon,
  LuBadgeAlert as UpdateIcon,
} from "react-icons/lu";

const Hero = () => {
  return (
    <section className="relative flex h-full min-h-[80vh] flex-col items-center justify-center">
      <div className="bg-size-[512px] absolute inset-0 bg-[url('/assets/images/bg-3.svg')] bg-repeat opacity-25"></div>

      <div className="relative z-10 mx-auto flex w-3/4 flex-col items-center gap-4">
        <div className="flex w-fit items-center gap-1 rounded-xl bg-blue-50 p-2 text-center text-sm font-medium text-blue-700 transition-colors duration-200 hover:bg-blue-100">
          <UpdateIcon />
          <span>Update: The website is actively being updated.</span>
        </div>
        <H1>World&apos;s Easiest Way To Pick Your Brains</H1>
        <p className="text-center text-lg md:text-xl">
          Create quizzes effortlessly in seconds. Play quizzes seamlessly in
          moments.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link
            href="/create"
            className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-8 py-4 font-medium text-white transition-colors duration-200 hover:bg-green-700"
          >
            <CreateIcon />
            <span>Create Quiz</span>
          </Link>
          <Link
            href="/explore"
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
          >
            <PlayIcon />
            <span>Play Quiz</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
