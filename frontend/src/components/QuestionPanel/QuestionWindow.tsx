import { Question } from "../../assets/data/faqs";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const QuestionWindow: React.FC<{ question: Question }> = ({ question }) => {
  const [display, setDisplay] = useState<boolean>(false);
  return (
    <div className="w-full px-4  border-gray-300 border-2 rounded-lg py-4 transition-all duration-[10s]">
      <div className="flex items-center justify-between">
        <p className="font-[600]">{question.question}</p>

        <div
          onClick={() => setDisplay((pre) => !pre)}
          className="transition-all duration-[1s]"
        >
          <IoIosArrowUp />
        </div>
      </div>

      {display && <div className="mt-3 text-[0.7rem]">{question.content}</div>}
    </div>
  );
};

export default QuestionWindow;
