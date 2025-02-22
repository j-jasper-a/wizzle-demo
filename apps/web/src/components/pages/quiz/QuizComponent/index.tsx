"use client";

import { useState } from "react";
import { ChoiceType, QuizType, UserResponseType } from "@wizzle-demo/shared";
import Overline from "@/components/reusable/Overline";
import H2 from "@/components/reusable/H2";
import Subtitle from "@/components/reusable/Subtitle";

const QuizComponent = ({ quiz }: { quiz: QuizType }) => {
  const activeQuiz = quiz;
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [choices, setChoices] = useState<ChoiceType[]>([]);
  const isLastQuestion =
    activeQuestionIndex === activeQuiz.questions.length - 1;
  const isActiveOption = (optionId: string) => {
    const choice = choices.find(
      (choice) =>
        choice.questionId === activeQuiz.questions[activeQuestionIndex].id,
    );
    return choice?.optionId === optionId;
  };

  const handleChoice = (questionId: string, optionId: string) => {
    setChoices((prevChoices) => {
      const newChoice: ChoiceType = { questionId, optionId };
      const existingChoice = prevChoices.find(
        (choice) => choice.questionId === questionId,
      );

      const updatedChoices = existingChoice
        ? prevChoices.map((choice) =>
            choice.questionId === questionId ? newChoice : choice,
          )
        : [...prevChoices, newChoice];

      console.log("Updated Choices:", updatedChoices);
      return updatedChoices;
    });
  };

  const handleNextQuestion = () => {
    if (activeQuestionIndex < activeQuiz.questions.length - 1) {
      setActiveQuestionIndex(activeQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (activeQuestionIndex > 0) {
      setActiveQuestionIndex(activeQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    const userResponse: UserResponseType = {
      id: "1",
      userId: "1",
      quizId: activeQuiz.id,
      choices,
      metadata: {
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    };
    console.log("User Response:", userResponse);
  };

  return (
    <main className="mx-auto flex max-w-screen-lg flex-col gap-4 p-4">
      <h1 className="text-center text-2xl font-bold text-white">
        {activeQuiz.title}
      </h1>
      <div className="flex flex-col items-center gap-8 rounded-xl bg-white p-4">
        <div className="flex flex-col items-center gap-2 text-center">
          <Overline>Question {activeQuestionIndex + 1}</Overline>
          <H2>{activeQuiz.questions[activeQuestionIndex].text}</H2>
        </div>
        <Subtitle>Select the correct answer(s).</Subtitle>
        <ul className="flex w-full flex-col gap-2">
          {activeQuiz.questions[activeQuestionIndex].options.map((option) => (
            <li key={option.id}>
              <p
                onClick={() =>
                  handleChoice(
                    activeQuiz.questions[activeQuestionIndex].id,
                    option.id,
                  )
                }
                className={`cursor-pointer rounded-xl px-6 py-3 ${isActiveOption(option.id) ? "bg-blue-700 text-white" : "bg-neutral-200/75 text-neutral-800"}`}
              >
                {option.text}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex w-full flex-col gap-2">
          <button onClick={handlePreviousQuestion} className="button-secondary">
            Previous
          </button>
          <button
            onClick={isLastQuestion ? handleSubmit : handleNextQuestion}
            className={isLastQuestion ? "button-success" : "button-primary"}
          >
            {isLastQuestion ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default QuizComponent;
