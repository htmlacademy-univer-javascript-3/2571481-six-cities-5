import { useCallback, useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { SortingForm } from './sorting-form';
import MainEmptyPage from './main-empty-page';
import Header from '@components/header';
import Map from '@components/map';
import OffersList from '@components/offers-list';
import { useAppSelector } from '@hooks/index';
import CitiesList from '@pages/main-page/citiesList';
import { Offers } from '@appTypes/offer';
import { CardType } from '@const';
import { getOffers } from '@store/offers-data/offers-data.selectors';
import { getCity } from '@store/engine-process/engine-process.selectors';

function MainPage(): JSX.Element {
  const offers = useAppSelector(getOffers);
  const city = useAppSelector(getCity);

  const [currentCityOffers, setCurrentCityOffers] = useState<Offers>([]);
  const [selectedSort, setSelectedSort] = useState('Popular');
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const activeOffer = offers.find((offer) => offer.id === activeOfferId);

  useEffect(() => {
    const filteredOffers = offers.filter((offer) => offer.city.name === city.name);
    setCurrentCityOffers(filteredOffers);
  }, [city, offers]);

  const sortedOffers = useMemo(() => {
    const sorted = [...currentCityOffers];
    switch (selectedSort) {
      case 'Price: low to high':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'Price: high to low':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'Top rated first':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return sorted;
  }, [currentCityOffers, selectedSort]);

  const handleSortChange = useCallback((sort: string) => {
    setSelectedSort(sort);
  }, []);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList/>
          </section>
        </div>
        <div className="cities">
          {sortedOffers.length > 0 ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{`${sortedOffers.length} places to stay in ${city.name}`}</b>
                <SortingForm onSortChange={handleSortChange} />
                <OffersList
                  offers={sortedOffers}
                  onActiveOfferChange={setActiveOfferId}
                  cardType={CardType.Cities}
                  className="cities__places-list places__list tabs__content"
                />
              </section>
              <div className="cities__right-section">
                <Map city={city} offers={sortedOffers} selectedOffer={activeOffer} className="cities__map" />
              </div>
            </div>) : <MainEmptyPage />}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
