import { useAppSelector } from '@hooks/index';
import { getSingleOffer } from '@store/single-offer-data/single-offer-data.selectors';

export function OfferGallery(): JSX.Element {
  const images = useAppSelector(getSingleOffer)?.images as string[];

  return (
    <div className="offer__gallery">
      {images.map((image) => (
        <div className="offer__image-wrapper" key={`image-${image}`}>
          <img className="offer__image" src={image} alt="Photo studio"/>
        </div>
      )).slice(0,6)}
    </div>
  );
}
