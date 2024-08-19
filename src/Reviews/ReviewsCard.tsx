import { TReview } from "types/types";
import { Card } from "antd";
interface  TReviewProps  {  
  review?: TReview;  
}

const ReviewsCard = ({ review }: TReviewProps) => {
  return (
   
      <Card
        className="w-72 h-60 border  border-slate-200  overflow-auto m-3"
        title=" Product Review"
      >       
        <h1>
          <strong>Name : </strong> {review?.name}
        </h1>
        <h3>
          <strong>Email : </strong> {review?.email}
        </h3>
        <h3>
          <strong> Comment : </strong> {review?.comment}
        </h3>
        <h3>
          <strong>Rating : </strong> {review?.rating}
        </h3>
      </Card>
   
  );
};

export default ReviewsCard;
