import Questions, { Question } from "../../assets/data/faqs";
import QuestionWindow from "./QuestionWindow";
import Faq from "../../assets/images/faq.png";

const QuestionPanel: React.FC = () => {
  return (
    <section className="flex max-md:flex-col px-[6rem] py-[3rem] w-full justify-between gap-[1rem] h-[40rem]">
      <div className="w-[50%] h-[30rem]">
        <img src={Faq} alt="" className="object-cover mx-auto h-full" />
      </div>

      <div className="w-[50%] flex flex-col">
        <h2 className="font-[800] text-[2.1rem] w-full">
          Most Questions by our beloved patients
        </h2>

        <div className="flex flex-col h-full justify-around">
          {Questions.map((item: Question) => (
            <QuestionWindow key={item.id} question={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionPanel;
