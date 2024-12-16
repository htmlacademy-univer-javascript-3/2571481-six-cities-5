import ReviewsItem from './reviews-item';
import { Reviews } from '@appTypes/review';

type ReviewsListProps = {
  reviews: Reviews;
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  const filteredReviews = [...reviews]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10);

  return (
    <ul className="reviews__list">
      {filteredReviews
        .map((review) => (
          <ReviewsItem key={review.id} review={review}/>
        ))}
    </ul>
  );
}

export default ReviewsList;
