import { Offers } from '@/types/offer';
import { RentOfferCard } from './cards/rent-offer-card';
import { useEffect, useState } from 'react';

type OffersListProps = {
  offers: Offers;
  onActiveOfferChange: (offerId: string | null) => void;
};

export function OffersList({offers, onActiveOfferChange} : OffersListProps) : JSX.Element {
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
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <RentOfferCard
          key={offer.id}
          offer = {offer}
          onMouseEnter={() => handleMouseEnter(offer.id)}
          onMouseLeave={handleMouseLeave}
        />))}
    </div>
  );
}
