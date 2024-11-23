import { Offers } from '@appTypes/offer';
import { RentOfferCard } from './rent-offer-card';
import { useEffect, useState } from 'react';
import { CardType } from '@const';

type OffersListProps = {
  offers: Offers;
  onActiveOfferChange: (offerId: string | null) => void;
  className: string;
};

export function OffersList({offers, onActiveOfferChange, className} : OffersListProps) : JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  useEffect(() => {
    onActiveOfferChange(activeOfferId);
  }, [activeOfferId, onActiveOfferChange]);

  const handleMouseEnter = (offerId: string) => {
    setActiveOfferId(offerId);
  };

  const handleMouseLeave = () => {
    setActiveOfferId(null);
  };

  return(
    <div className={className}>
      {offers.map((offer) => (
        <RentOfferCard
          key={offer.id}
          offer = {offer}
          onMouseEnter={() => handleMouseEnter(offer.id)}
          onMouseLeave={handleMouseLeave}
          cardType={CardType.Cities}
        />))}
    </div>
  );
}
