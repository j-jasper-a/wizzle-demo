"use client";

import { useState } from "react";
import { nanoid as generateId } from "nanoid";
import { QuestionType, OptionType, QuizType } from "@wizzle-demo/libs";
import { LuTrash2 as RemoveIcon, LuPlus as AddIcon } from "react-icons/lu";
import Overline from "@/components/reusable/Overline";
import H2 from "@/components/reusable/H2";
import Subtitle from "@/components/reusable/Subtitle";

// Add meta title

const Home = () => {
  const [quizTitle, setQuizTitle] = useState("");
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [optionInputs, setOptionInputs] = useState<{ [key: string]: string }>(
    {},
  );

  const handleAddQuestion = () => {
    if (newQuestion.trim() !== "") {
      setQuestions([
        ...questions,
        { id: generateId(), text: newQuestion.trim(), options: [] },
      ]);
      setNewQuestion("");
    }
  };

  const handleAddOption = (questionId: string) => {
    const optionText = optionInputs[questionId]?.trim();
    if (optionText) {
      setQuestions((prev) =>
        prev.map((q) =>
          q.id === questionId && q.options.length < 6
            ? {
                ...q,
                options: [
                  ...q.options,
                  { id: generateId(), text: optionText } as OptionType,
                ],
              }
            : q,
        ),
      );
      setOptionInputs((prev) => ({ ...prev, [questionId]: "" }));
    }
  };

  const handleRemoveOption = (questionId: string, optionId: string) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId
          ? { ...q, options: q.options.filter((opt) => opt.id !== optionId) }
          : q,
      ),
    );
  };

  const handleRemoveQuestion = (questionId: string) => {
    setQuestions((prev) => prev.filter((q) => q.id !== questionId));
  };

  const handleSubmitQuiz = () => {
    const quiz: QuizType = {
      id: generateId(),
      slug: `quiz-${generateId(8)}`,
      title: quizTitle.trim() || "Untitled Quiz",
      questions,
    };

    console.log("Quiz Submitted", quiz);
  };

  return (
    <main className="mx-auto flex max-w-screen-lg flex-col items-center gap-8 rounded-xl bg-blue-50 p-4">
      <header className="w-full">
        <textarea
          value={quizTitle}
          onChange={(e) => setQuizTitle(e.target.value)}
          placeholder="Write your quiz title here."
          className="text-2xl font-bold"
          rows={3}
        />
      </header>

      <section className="flex w-full flex-col gap-4">
        {questions.length > 0 ? (
          questions.map((question, index) => (
            <article
              key={question.id}
              className="flex flex-col items-center gap-4 rounded-xl bg-white p-4"
            >
              <header className="flex flex-col items-center gap-2 text-center">
                <Overline>Question {index + 1}</Overline>
                <H2>{question.text}</H2>
              </header>

              <Subtitle>
                Add up to 6 options as answers for this question.
              </Subtitle>
              <ul className="flex w-full flex-col gap-2">
                {question.options.map((option) => (
                  <li key={option.id} className="flex items-center gap-2">
                    <p className="option">{option.text}</p>
                    <button
                      type="button"
                      onClick={() => handleRemoveOption(question.id, option.id)}
                      className="h-fit w-fit rounded-full bg-neutral-50 p-2 transition-colors duration-200 hover:bg-neutral-100"
                    >
                      <RemoveIcon className="text-lg" />
                    </button>
                  </li>
                ))}
                {question.options.length < 6 && (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={optionInputs[question.id] || ""}
                      onChange={(e) =>
                        setOptionInputs((prev) => ({
                          ...prev,
                          [question.id]: e.target.value,
                        }))
                      }
                      placeholder="Add new option"
                      className="h-fit"
                    />
                    <button
                      type="button"
                      onClick={() => handleAddOption(question.id)}
                      className="h-fit w-fit rounded-full bg-blue-50 p-2 transition-colors duration-200 hover:bg-blue-100"
                    >
                      <AddIcon className="text-lg" />
                    </button>
                  </div>
                )}
              </ul>

              <button
                type="button"
                onClick={() => handleRemoveQuestion(question.id)}
                className="button-secondary"
              >
                Remove Question
              </button>
            </article>
          ))
        ) : (
          <p className="text-center text-sm text-neutral-400">
            You have not added any question yet.
          </p>
        )}
      </section>

      <section className="flex w-full flex-col gap-2 rounded-xl bg-white p-4">
        <textarea
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Write a new question for your quiz."
          rows={3}
        />
        <button
          onClick={handleAddQuestion}
          type="button"
          className="button-primary"
        >
          Add New Question
        </button>
      </section>

      {questions.length > 0 && (
        <button
          type="button"
          onClick={handleSubmitQuiz}
          className="button-success"
        >
          Launch Quiz
        </button>
      )}
    </main>
  );
};

export default Home;
