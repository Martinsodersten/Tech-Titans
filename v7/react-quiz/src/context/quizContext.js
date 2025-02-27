"use client";

import { createContext, useState } from "react";

const mockData = [
  {
    id: 1,
    question: "What is the capital of Sweden?",
    answers: ["Stockholm", "Oslo", "Copenhagen", "Helsinki"],
    correctAnswer: "Stockholm",
  },
  {
    id: 2,
    question: "What is the capital of Norway?",
    answers: ["Stockholm", "Oslo", "Copenhagen", "Helsinki"],
    correctAnswer: "Oslo",
  },
  {
    id: 3,
    question: "What is the capital of Denmark?",
    answers: ["Stockholm", "Oslo", "Copenhagen", "Helsinki"],
    correctAnswer: "Copenhagen",
  },
  {
    id: 4,
    question: "What is the capital of Finland?",
    answers: ["Stockholm", "Oslo", "Copenhagen", "Helsinki"],
    correctAnswer: "Helsinki",
  },
];
export const QuizContext = createContext({ mockData, undefined });

export function QuizContextProvider({ children }) {
  const [questions, setQuestions] = useState(mockData);

  return (
    <QuizContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuizContext.Provider>
  );
}
