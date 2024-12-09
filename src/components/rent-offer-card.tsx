import { AppRoute, AuthStatus, CardImageWrapper, CardType } from '@const';
import { Offer } from '@appTypes/offer';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@hooks/index';
import { editFavoritesAction } from '@store/api-actions';
import { redirectToRoute } from '@store/action';
import { getAuthStatus } from '@store/user-process/user-process.selectors';

type RentOfferCardProps = {
  offer: Offer;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  cardType: CardType;
}

export function RentOfferCard({offer, onMouseEnter, onMouseLeave, cardType}: RentOfferCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthStatus) === AuthStatus.Auth;
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    if (isAuth) {
      dispatch(editFavoritesAction({
        offerId: offer.id,
        isFavorite: !offer.isFavorite
      }));
    } else {
      dispatch(redirectToRoute(AppRoute.Login));
    }
  };

  return(
    <article
      className={`${cardType} place-card`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={`${CardImageWrapper[cardType]} place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={cardType === CardType.Favorites ? 150 : 260}
            height={cardType === CardType.Favorites ? 110 : 200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`${cardType === CardType.Favorites ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button${offer.isFavorite && '--active'} button`} type="button" onClick={handleClick}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(offer.rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
