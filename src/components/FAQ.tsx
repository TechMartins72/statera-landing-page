import { FiPlus } from "react-icons/fi";

const questions = [
  {
    question: "Why Midnight Network?",
    answer: "",
  },
  {
    question: "What is statera?",
    answer: "",
  },
  {
    question: "What is launchpad?",
    answer: "",
  },
  {
    question: "Why Midnight Network?",
    answer: "",
  },
  {
    question: "What is statera?",
    answer: "",
  },
  {
    question: "What is launchpad?",
    answer: "",
  },
];

const FAQ = () => {
  return (
    <section className="container flex flex-col justify-center items-center gap-6">
      <div className="flex flex-col justify-center items-center">
        <span className="py-2 px-10 tracking-widest text-2xl bg-white text-black font-semibold rounded-2xl">
          FAQs
        </span>
        <p className="text-lg md:text-xl my-4 text-center">
          These are our frequently asked questions
        </p>
      </div>
      <div className="flex flex-col gap-2 w-full max-w-5xl mx-auto text-xl md:text-2xl lg:text-3xl">
        {questions.map((q, idx) => (
          <div
            key={idx}
            className="py-6 md;py-9 flex justify-between items-center border-b border-gray-800 cursor-pointer"
          >
            <span>{q.question}</span>
            <span>
              <FiPlus />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
