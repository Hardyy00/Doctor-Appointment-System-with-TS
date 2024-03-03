import { comment } from "./Carousel";

const Comment: React.FC<{ comment: comment }> = ({ comment }) => {
  console.log(comment);
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-start gap-4">
        <div className="">
          <img src={comment.image} className="object-cover h-full" alt="" />
        </div>
        <div>
          <div className="flex flex-col">{comment.name}</div>
          <div>{comment.rating}</div>
        </div>
      </div>
      <div>{comment.comment}</div>
    </div>
  );
};

export default Comment;
