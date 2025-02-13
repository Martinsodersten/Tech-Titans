"use client";

import { QuizContext } from "@/context/quizContext";
import Link from "next/link";
import { useContext } from "react";
import { useForm } from "react-hook-form";

function generateId() {
  return Math.random().toString(36).substring(7);
}

export default function AdminPage() {
  const context = useContext(QuizContext);

  const { questions, setQuestions } = context;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newQuestion = {
      id: generateId(),
      question: data.question,
      answers: [
        data["option-1"],
        data["option-2"],
        data["option-3"],
        data["correct"],
      ].sort(() => Math.random() - 0.5),
      correctAnswer: data["correct"],
    };

    setQuestions([...questions, newQuestion]);

    console.log(questions);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-1 pt-24 text-black"
      >
        <input
          defaultValue="Vad är?"
          placeholder="Fråga"
          {...register("question", { required: true })}
          className="
            border-2 border-gray-300
            rounded-md
            text-xs
            py-1
            px-2
            focus:outline-none
            focus:ring-2
            focus:ring-blue-600
            focus:border-transparent
            "
        />

        <input
          placeholder="Alternativ 1"
          defaultValue="1"
          {...register("option-1", { required: true })}
          className="
            border-2 border-gray-300
            rounded-md
            text-xs
            py-1
            px-2
            focus:outline-none
            focus:ring-2
            focus:ring-blue-600
            focus:border-transparent
            "
        />
        <input
          placeholder="Alternativ 2"
          defaultValue="2"
          {...register("option-2", { required: true })}
          className="
            border-2 border-gray-300
            rounded-md
            text-xs
            py-1
            px-2
            focus:outline-none
            focus:ring-2
            focus:ring-blue-600
            focus:border-transparent
            "
        />
        <input
          placeholder="Alternativ 3"
          defaultValue="3"
          {...register("option-3", { required: true })}
          className="
            border-2 border-gray-300
            rounded-md
            text-xs
            py-1
            px-2
            focus:outline-none
            focus:ring-2
            focus:ring-blue-600
            focus:border-transparent
            "
        />
        <input
          placeholder="Alternativ 4"
          defaultValue="4"
          {...register("correct", { required: true })}
          className="
            border-2 border-gray-300
            rounded-md
            text-xs
            py-1
            px-2
            focus:outline-none
            focus:ring-2
            focus:ring-blue-600
            focus:border-transparent
            "
        />

        {errors.exampleRequired && <span>This field is required</span>}

        <input
          type="submit"
          className="text-white
            bg-blue-500
            hover:bg-blue-700
            rounded-md
            text-xs
            py-1
            px-2
            focus:outline-none
            focus:ring-2
            focus:ring-blue-600
            focus:border-transparent
        "
        />
      </form>
    </>
  );
}
