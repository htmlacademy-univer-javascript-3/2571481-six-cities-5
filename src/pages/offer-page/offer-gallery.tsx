import { memo } from 'react';
import { useAppSelector } from '@hooks/index';
import { getSingleOffer } from '@store/single-offer-data/single-offer-data.selectors';

export function OfferGallery(): JSX.Element {
  const firstSixImages = (useAppSelector(getSingleOffer)?.images as string[]).slice(0,6);

  return (
    <div className="offer__gallery">
      {firstSixImages.map((image) => (
        <div className="offer__image-wrapper" key={`image-${image}`}>
          <img className="offer__image" src={image} alt="Photo studio"/>
        </div>
      ))}
    </div>
  );
}

const MemoizedOfferGallery = memo(OfferGallery);
export default MemoizedOfferGallery;
