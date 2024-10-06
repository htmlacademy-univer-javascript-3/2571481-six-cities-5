import { PlaceInfo } from '@/constants-and-types/types';

export function RentOfferCard(placeInfo: PlaceInfo): JSX.Element {
  return(
    <article className="cities__card place-card">
      {placeInfo.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={placeInfo.imageUrl}
            width="260" height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{placeInfo.priceValue}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button${placeInfo.isFavorite && '--active'} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${placeInfo.placeRating * 100 / 5}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{placeInfo.placeName}</a>
        </h2>
        <p className="place-card__type">{placeInfo.placeType}</p>
      </div>
    </article>
  );
}
