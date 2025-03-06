"use client";

import { useState } from "react";
import { nanoid as generateId } from "nanoid";
import { QuestionType, OptionType, QuizType } from "@wizzle-demo/libs";
import { LuTrash2 as RemoveIcon, LuPlus as AddIcon } from "react-icons/lu";
import Overline from "@/components/reusable/Overline";
import H2 from "@/components/reusable/H2";
import Subtitle from "@/components/reusable/Subtitle";
import dayjs from "dayjs";

const QuizCreator = () => {
  const [quizTitle, setQuizTitle] = useState("");
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
    const newQuiz: QuizType = {
      id: generateId(),
      slug: `quiz-${generateId(8)}`,
      title: quizTitle.trim() || "Untitled Quiz",
      questions,
      creatorId: "f7a9c6b2e4a7d5c8",
      metadata: {
        createdAt: dayjs().toISOString(),
      },
    };

    console.log("Quiz Submitted", newQuiz);
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
                    <p className="option-text">{option.text}</p>
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
                      value={questionOptionInputs[question.id] || ""}
                      onChange={(e) =>
                        setQuestionOptionInputs((previousInputs) => ({
                          ...previousInputs,
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

export default QuizCreator;
