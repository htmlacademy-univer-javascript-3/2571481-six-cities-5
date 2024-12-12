import { Review } from '@appTypes/review';

type ReviewsItemProps = {
  review: Review;
};

function ReviewsItem({ review }: ReviewsItemProps): JSX.Element {
  const { rating, user, date, comment } = review;

  const textDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="User avatar"/>
        </div>
        <span className="reviews__user-name">{user.name}</span>
        {user.isPro && <span className="offer__user-status">Pro</span>}
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating * 100 / 5}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>{textDate}</time>
      </div>
    </li>
  );
}

export default ReviewsItem;
