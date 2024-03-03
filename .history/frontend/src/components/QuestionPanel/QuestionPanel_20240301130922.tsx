import Questions, { Question } from "../../assets/data/faqs";
import QuestionWindow from "./QuestionWindow";
import Faq from "../../assets/images/faq.png";

const QuestionPanel: React.FC = () => {
  return (
    <section className="flex max-md:flex-col px-[6rem] py-[3rem] w-full">
      <div className="w-[50%]">
        <img src={Faq} alt="" />
      </div>

      <div className="">
        <h2>Most Questions by our beloved patients </h2>

        <div className="">
          {Questions.map((item: Question) => (
            <QuestionWindow key={item.id} question={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionPanel;
