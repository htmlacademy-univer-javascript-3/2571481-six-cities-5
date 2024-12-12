import ReviewsItem from './reviews-item';
import { Reviews } from '@appTypes/review';

type ReviewsListProps = {
  reviews: Reviews;
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {[...reviews]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 10)
        .map((review) => (
          <ReviewsItem key={review.id} review={review}/>
        ))}
    </ul>
  );
}

export default ReviewsList;
