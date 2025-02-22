"use client";

import { useState } from "react";
import { nanoid as generateId } from "nanoid";
import {
  QuestionType,
  OptionType,
  QuizType,
  CategoryType,
  CategorySchema,
} from "@wizzle-demo/shared";
import { LuTrash2 as RemoveIcon, LuPlus as AddIcon } from "react-icons/lu";
import Overline from "@/components/reusable/Overline";
import H2 from "@/components/reusable/H2";
import Subtitle from "@/components/reusable/Subtitle";
import dayjs from "dayjs";
import { createQuiz } from "@/actions/quizzes";

const QuizCreator = () => {
  const [quizTitle, setQuizTitle] = useState("");
  const [quizCategory, setQuizCategory] = useState<CategoryType | "">("");
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [newQuestionText, setNewQuestionText] = useState("");
  const [questionOptionInputs, setQuestionOptionInputs] = useState<{
    [key: string]: string;
  }>({});

  const handleAddQuestion = () => {
    if (newQuestionText.trim() !== "") {
      setQuestions([
        ...questions,
        {
          id: generateId(),
          text: newQuestionText.trim(),
          options: [],
        },
      ]);
      setNewQuestionText("");
    }
  };

  const handleAddOption = (questionId: string) => {
    const newOptionText = questionOptionInputs[questionId]?.trim();
    if (newOptionText) {
      setQuestions((previousQuestions) =>
        previousQuestions.map((currentQuestion) =>
          currentQuestion.id === questionId &&
          currentQuestion.options.length < 6
            ? {
                ...currentQuestion,
                options: [
                  ...currentQuestion.options,
                  { id: generateId(), text: newOptionText } as OptionType,
                ],
              }
            : currentQuestion,
        ),
      );
      setQuestionOptionInputs((previousInputs) => ({
        ...previousInputs,
        [questionId]: "",
      }));
    }
  };

  const handleRemoveOption = (questionId: string, optionId: string) => {
    setQuestions((previousQuestions) =>
      previousQuestions.map((currentQuestion) =>
        currentQuestion.id === questionId
          ? {
              ...currentQuestion,
              options: currentQuestion.options.filter(
                (option) => option.id !== optionId,
              ),
            }
          : currentQuestion,
      ),
    );
  };

  const handleRemoveQuestion = (questionId: string) => {
    setQuestions((previousQuestions) =>
      previousQuestions.filter(
        (currentQuestion) => currentQuestion.id !== questionId,
      ),
    );
  };

  const handleSubmitQuiz = () => {
    if (!quizCategory || !CategorySchema.safeParse(quizCategory).success) {
      alert("Please select a valid category.");
      return;
    }

    const newQuiz: QuizType = {
      id: generateId(),
      title: quizTitle.trim() || "Untitled Quiz",
      category: quizCategory as CategoryType,
      questions,
      creatorId: "user",
      metadata: {
        createdAt: dayjs().toISOString(),
      },
    };

    const quiz = createQuiz(newQuiz);

    console.log("Quiz Submitted", quiz);
  };

  return (
    <main className="mx-auto flex max-w-screen-lg flex-col items-center gap-8 rounded-xl bg-blue-50 p-4">
      <header className="flex w-full flex-col gap-4">
        <textarea
          value={quizTitle}
          onChange={(e) => setQuizTitle(e.target.value)}
          placeholder="Write your quiz title here."
          className="text-2xl font-bold"
          rows={3}
        />
        <select
          value={quizCategory}
          onChange={(e) => setQuizCategory(e.target.value as CategoryType)}
          className="text-lg"
        >
          <option value="">Select a category</option>
          {CategorySchema.options.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
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
                    <p className="option-text">{option.text}</p>
                    <button
                      type="button"
                      onClick={() => handleRemoveOption(question.id, option.id)}
                      className="h-fit w-fit rounded-full bg-neutral-50 p-2 hover:bg-neutral-100"
                    >
                      <RemoveIcon className="text-lg" />
                    </button>
                  </li>
                ))}
              </ul>
            </article>
          ))
        ) : (
          <p className="text-center text-sm text-neutral-400">
            You have not added any questions yet.
          </p>
        )}
      </section>

      <section className="flex w-full flex-col gap-2 rounded-xl bg-white p-4">
        <textarea
          value={newQuestionText}
          onChange={(e) => setNewQuestionText(e.target.value)}
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
          onClick={handleSubmitQuiz}
          type="button"
          className="button-success"
        >
          Launch Quiz
        </button>
      )}
    </main>
  );
};

export default QuizCreator;
