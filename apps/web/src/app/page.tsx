import Hero from "@/components/pages/home/Hero";
import QuizGrid from "@/components/to-be-decided/QuizGrid";
import quizzes from "@/data/quizzes";

export default function Home() {
  return (
    <main className="max-w-(--breakpoint-lg) mx-auto flex flex-col gap-8 px-4">
      <Hero />
      <QuizGrid quizzes={quizzes} />
    </main>
  );
}
