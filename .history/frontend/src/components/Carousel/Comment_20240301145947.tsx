import { comment } from "./Carousel";
import Star from "../../assets/images/Star.png";

const Comment: React.FC<{ comment: comment }> = ({ comment }) => {
  const images: string[] = [];

  for (let i = 0; i < comment.rating; i++) {
    images.push(Star);
  }
  return (
    <div className="flex flex-col text-white bg-primaryColor w-[24rem] px-4 py-6 gap-[1rem] rounded-lg">
      <div className="flex items-center justify-start gap-4">
        <div className="">
          <img src={comment.image} className="object-cover h-full" alt="" />
        </div>
        <div className="flex flex-col justify-start">
          <div className="flex flex-col font-[600] tracking-wider">
            {comment.name}
          </div>
          <div className="flex">
            {images.map((item: string) => (
              <img src={item} alt="" className="h-4" />
            ))}
          </div>
        </div>
      </div>
      <div className="text-left">"{comment.comment}"</div>
    </div>
  );
};

export default Comment;
