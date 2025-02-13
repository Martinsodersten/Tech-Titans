"use client";

import { useContext, useState } from "react";
import { QuizContext } from "@/context/quizContext";

export default function QuizPage() {
  const context = useContext(QuizContext);
  const { questions } = context;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  
  const [points, setPoints] = useState(0);

  function handleNextQuestion(selectedAnswer) {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setPoints(prevPoints => prevPoints + 1);
    }

    if (currentQuestion < questions.length) {
      setCurrentQuestion(prevQuestion => prevQuestion + 1);
      setSelectedAnswer(null);
    }
  }

  return (
    <main>
      <h1>Quiz - {points} poäng</h1>
      {currentQuestion < questions.length
      ? <>
          {questions[currentQuestion].question}
          {questions[currentQuestion].answers.map((answer, index) =>
          <div key={index}>
            <input
              type="radio"
              id={`answer${index}`}
              name="answer"
              value={answer}
              onChange={() => setSelectedAnswer(answer)}
            />
            <label htmlFor={`answer${index}`}>{answer}</label>
          </div>
          )}
          <button onClick={() => handleNextQuestion(selectedAnswer)}>Next question</button>
        </>
      : <p>Färdigt!</p>
    }
      
    </main>
  )
}