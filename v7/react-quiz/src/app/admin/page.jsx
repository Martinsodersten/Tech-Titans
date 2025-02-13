"use client";

import { useContext, useState } from "react";
import { QuizContext } from "@/context/quizContext";

export default function AdminPage() {
  const context = useContext(QuizContext);
  const { questions } = context;

  return (
    <main>
      <h1>Admin</h1>
      <form>
        {questions.map(question => 
        <p>
          <input type="text" value={question.question} />
          {question.answers.map(answer => <input type="text" value={answer} />)}
        </p>
        )}
        <button >Spara quiz</button>
      </form>
    </main>
  )
}