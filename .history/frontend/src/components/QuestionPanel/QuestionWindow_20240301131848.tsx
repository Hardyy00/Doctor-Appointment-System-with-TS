import { Question } from "../../assets/data/faqs";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const QuestionWindow: React.FC<{ question: Question }> = ({ question }) => {
  const [display, setDisplay] = useState<boolean>(false);
  return (
    <div>
      <div>
        <p>{question.question}</p>

        <div onClick={() => setDisplay((pre) => !pre)}>
          {" "}
          <IoIosArrowUp />{" "}
        </div>
      </div>

      {display && <div></div>}
    </div>
  );
};

export default QuestionWindow;
