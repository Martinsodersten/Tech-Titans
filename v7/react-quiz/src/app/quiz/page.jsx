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
    <section className="w-full px-8 h-3/5 mt-12 flex flex-col justify-between">
      <h1 className="text-center text-lg font-bold w-full">
        {questions[currentQuestion].question}
      </h1>
    
      {currentQuestion < questions.length
      ? <div className="w-full h-32 grid grid-cols-2 gap-1">
          {questions[currentQuestion].answers.map((answer, index) =>
            <button key={index} onClick={() => setSelectedAnswer(answer)} className="w-full hover:opacity-90 rounded-md text-xs text-white font-medium border-b-4 bg-red-500 border-red-600">
              {answer}
            </button>
          )}
          <button onClick={() => handleNextQuestion(selectedAnswer)}>Next question</button>
        </div>
      : <p>Färdigt!</p>
    }
    </section>
  )
}