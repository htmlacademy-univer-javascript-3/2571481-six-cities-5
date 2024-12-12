import React from 'react';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/index';
import { postReviewAction } from '@store/api-actions';
import { setFormAcceptedStatus } from '@store/single-offer-data/single-offer-data';
import { getSingleOfferFormAcceptedStatus, getSingleOfferReviewPostingStatus } from '@store/single-offer-data/single-offer-data.selectors';

const titlesForRate = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect'
} as const;

type ReviewFormProps = {
  offerId: string;
}

function ReviewFormComponent({ offerId } : ReviewFormProps): JSX.Element {
  const [formData, setFormData] = useState({
    review: '',
    rating: 0
  });
  const isFormAccepted = useAppSelector(getSingleOfferFormAcceptedStatus);
  const isPosting = useAppSelector(getSingleOfferReviewPostingStatus);
  const [isValid, setIsValid] = useState(false);
  const dispatch = useAppDispatch();

  const handleFieldChange = useCallback((evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  useEffect(() => {
    if(formData.review.length > 50 && formData.review.length < 301 && formData.rating !== 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  const handleSubmit = useCallback(
    (evt: React.FormEvent<HTMLFormElement>) => {
      evt.preventDefault();

      dispatch(postReviewAction({
        comment: formData.review,
        rating: formData.rating,
        id: offerId
      }));

      if (isFormAccepted) {
        setFormData({
          review: '',
          rating: 0
        });
        dispatch(setFormAcceptedStatus(false));
      }
    },
    [dispatch, formData, isFormAccepted, offerId]
  );

  function starsRender(rating: 1|2|3|4|5) {
    const title = titlesForRate[rating];
    return (
      <Fragment>
        <input className="form__rating-input visually-hidden" onChange={handleFieldChange} name="rating" value={rating} id={`${rating}-stars`} type="radio" />
        <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title={title}>
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </Fragment>
    );
  }

  return (
    <form className="reviews__form form" onSubmit={handleSubmit} aria-disabled={!isPosting}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {starsRender(5)}
        {starsRender(4)}
        {starsRender(3)}
        {starsRender(2)}
        {starsRender(1)}
      </div>
      <textarea className="reviews__textarea form__textarea" onChange={handleFieldChange} value={formData.review} id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValid}>Submit</button>
      </div>
    </form>
  );
}

export const ReviewForm = React.memo(ReviewFormComponent);
