import { Question } from "../../assets/data/faqs";
import { useState } from "react";

const QuestionWindow: React.FC<{ question: Question }> = ({ question }) => {
    

  const [display, setDisplay]  = useState<boolean>(false);
  return <div>
        
        <div className="">

         </div>   

        {display && <div>
            
            
            </div>}
        </div>
  </div>;
};

export default QuestionWindow;
