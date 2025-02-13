function uuid() {
  return Math.random().toString(16).slice(2);
}

const question = {
  id: uuid(),
  question: "What is the capital of France?",
  options: ["New York", "London", "Paris", "Dublin"],
  answer: "Paris",
};

export default function QuizPage() {
  return (
    <section className="w-full px-8 h-3/5 mt-12 flex flex-col justify-between">
      <h1 className="text-center text-lg font-bold w-full">
        {question.question}
      </h1>
      <div className="w-full h-32 grid grid-cols-2 gap-1">
        <button className="w-full hover:opacity-90 rounded-md text-xs text-white font-medium border-b-4 bg-red-500 border-red-600">
          {question.options[0]}
        </button>
        <button className="w-full hover:opacity-90 rounded-md text-xs text-white font-medium border-b-4 bg-blue-500 border-blue-600">
          {question.options[1]}
        </button>
        <button className="w-full hover:opacity-90 rounded-md text-xs text-white font-medium border-b-4 bg-green-500 border-green-600">
          {question.options[2]}
        </button>
        <button className="w-full hover:opacity-90 rounded-md text-xs text-white font-medium border-b-4 bg-yellow-500 border-yellow-600">
          {question.options[3]}
        </button>
      </div>
    </section>
  );
}
