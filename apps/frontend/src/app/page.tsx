import Hero from "@/components/home/Hero";
import QuizGrid from "@/components/home/QuizGrid";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-screen-lg flex-col gap-8 px-4">
      <Hero />
      <QuizGrid />
    </main>
  );
}
