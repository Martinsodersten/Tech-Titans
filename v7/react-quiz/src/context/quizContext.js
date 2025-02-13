"use client";

import { createContext, use, useState, useEffect } from "react";

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

const localStorageData = JSON.parse(localStorage.getItem("questions"));
let q;

if (localStorageData) {
  q = localStorageData;
} else {
  q = mockData;
}

export const QuizContext = createContext({ mockData, undefined });

export function QuizContextProvider({ children }) {
  const [questions, setQuestions] = useState(q);

  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);

  return (
    <QuizContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuizContext.Provider>
  );
}
