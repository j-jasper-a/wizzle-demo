import Hero from "@/components/pages/home/Hero";
import QuizGrid from "@/components/reusable/QuizGrid";
import quizzes from "@/example/quizzes";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-screen-lg flex-col gap-8 px-4">
      <Hero />
      <QuizGrid quizzes={quizzes} />
    </main>
  );
}
