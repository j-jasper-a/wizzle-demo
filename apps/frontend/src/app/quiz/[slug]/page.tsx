"use client";

import { useState } from "react";
import { ChoiceType, QuizType, UserResponseType } from "@wizzle-demo/libs";
import Overline from "@/components/reusable/Overline";
import H2 from "@/components/reusable/H2";
import Subtitle from "@/components/reusable/Subtitle";

const activeQuiz: QuizType = {
  id: "f7a9c6b2e4a7d5c8",
  slug: "web-development-basics",
  title: "Web Development Basics",
  questions: [
    {
      id: "b17f3c2e9d8a41e4",
      text: "What does HTML stand for?",
      options: [
        { id: "3c8e5b2a41f74d1c", text: "Hyper Transfer Markup Language" },
        { id: "2a5d8c9e41b74f3c", text: "Hyper Text Markup Language" },
        { id: "1d7e8b2c5a3f4c9e", text: "High Tech Modern Language" },
        {
          id: "9e4b7c2d1f8a4a5c",
          text: "Hyperlink and Text Management Language",
        },
      ],
    },
    {
      id: "d8b2e7c41f9a3a6d",
      text: "Which CSS property is used to change the text color of an element?",
      options: [
        { id: "b2e5d7a43c9f1f8a", text: "font-color" },
        { id: "1f8c2a7e5d4b3c9f", text: "text-color" },
        { id: "2d7b4c9e1a5f3f8c", text: "color" },
        { id: "3c8e2b7a1d5f4f9c", text: "background-color" },
      ],
    },
    {
      id: "a7b2d8c41f9e3a6d",
      text: "Which of the following is a JavaScript framework?",
      options: [
        { id: "1f8c2b7e5d4a3c9f", text: "Laravel" },
        { id: "2d7b4c9e1a5f3f8c", text: "Django" },
        { id: "3c8e2b7a1d5f4f9c", text: "React" },
        { id: "4f1e8b2c5d7a3a9f", text: "Flask" },
      ],
    },
  ],
};

const Home = () => {
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

export default Home;
