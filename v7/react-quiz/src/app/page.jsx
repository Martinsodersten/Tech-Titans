"use client";

import { QuizContext } from "@/context/quizContext";
import Link from "next/link";
import { useContext } from "react";

export default function Home() {
  const context = useContext(QuizContext);

  const { questions } = context;

  return (
    <div className="flex flex-col justify-center">
      <Link href="/quiz">
        <button className='
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-4
            rounded
        '>Starta quiz</button>
      </Link>
      <Link href="/admin">
      <button className='
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-4
            rounded
        '>Admin</button>
      </Link>
    </div>
  );
}
