import { Offers } from "@/types/offer";
import { RentOfferCard } from "./rent-offer-card";
import { useState } from "react";

type OffersListProps = {
    offers: Offers;
};

export function OffersList({offers} : OffersListProps) : JSX.Element {
  const [/*activeOfferId*/, setActiveOfferId] = useState<string | null>(null);

  const onMouseEnter = (offerId: string) => {
    setActiveOfferId(offerId);
  };

  const onMouseLeave = () => {
    setActiveOfferId(null);
  };
  
  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <RentOfferCard
          key={offer.id}
          offer = {offer}
          onMouseEnter={() => onMouseEnter(offer.id)}
          onMouseLeave={onMouseLeave}
        />
      )}
    </div>
  );
}