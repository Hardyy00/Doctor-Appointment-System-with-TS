import { Question } from "../../assets/data/faqs";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const QuestionWindow: React.FC<{ question: Question }> = ({ question }) => {
  const [display, setDisplay] = useState<boolean>(false);
  return (
    <div className="w-full px-4">
      <div className="flex items-center justify-between">
        <p>{question.question}</p>

        <div
          onClick={() => setDisplay((pre) => !pre)}
          className="transition-all duration-[1s]"
        >
          <IoIosArrowUp />
        </div>
      </div>

      {display && <div>{question.content}</div>}
    </div>
  );
};

export default QuestionWindow;
