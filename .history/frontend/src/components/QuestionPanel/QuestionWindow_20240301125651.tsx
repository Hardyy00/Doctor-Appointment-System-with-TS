import { Question } from "../../assets/data/faqs";

const QuestionWindow: React.FC<{ question: Question }> = ({ question }) => {
  return <div>{question.question}</div>;
};

export default QuestionWindow;
