import { comment } from "./Carousel";

const Comment: React.FC<{ comment: comment }> = ({ comment }) => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div>
          <img src={comment.image} alt="" />
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
