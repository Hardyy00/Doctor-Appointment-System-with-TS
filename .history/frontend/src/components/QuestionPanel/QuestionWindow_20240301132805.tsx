import { Question } from "../../assets/data/faqs";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const QuestionWindow: React.FC<{ question: Question }> = ({ question }) => {
  const [display, setDisplay] = useState<boolean>(false);
  return (
    <div className="w-full px-4 mt-[1rem] border-gray-300 border-2 rounded-lg">
      <div className="flex items-center justify-between">
        <p>{question.question}</p>

        <div
          onClick={() => setDisplay((pre) => !pre)}
          className="transition-all duration-[1s]"
        >
          <IoIosArrowUp />
        </div>
      </div>

      {display && <div className="mt-3">{question.content}</div>}
    </div>
  );
};

export default QuestionWindow;
