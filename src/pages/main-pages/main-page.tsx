import { Header } from '@components/header';
import Map from '@components/map';
import { OffersList } from '@components/offersList';
import { Cities } from '@appTypes/city';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '@hooks/index';
import { CitiesList } from '@components/citiesList';
import { Offers } from '@appTypes/offer';
import { SortingForm } from './sorting-form';

export function MainPage(): JSX.Element {
  const offers = useAppSelector((state) => state.offersList);
  const city = useAppSelector((state) => state.city);

  const [currentCityOffers, setCurrentCityOffers] = useState<Offers>([]);
  const [filteredCityOffers, setFilteredCityOffers] = useState<Offers>([]);
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const activeOffer = offers.find((offer) => offer.id === activeOfferId);
  useEffect(() => {
    const filteredOffers = offers.filter((offer) => offer.city.name === city.name);
    setFilteredCityOffers(filteredOffers);
    setCurrentCityOffers(filteredOffers);
  }, [city, offers]);

  const handleSortChange = (selectedSort: string) => {
    let sortedOffers = [...currentCityOffers];
    switch (selectedSort) {
      case 'Price: low to high':
        sortedOffers.sort((a, b) => a.price - b.price);
        break;
      case 'Price: high to low':
        sortedOffers.sort((a, b) => b.price - a.price);
        break;
      case 'Top rated first':
        sortedOffers.sort((a, b) => b.rating - a.rating);
        break;
      default:
        sortedOffers = [...filteredCityOffers];
        break;
    }
    setCurrentCityOffers(sortedOffers);
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={Cities}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${currentCityOffers.length} places to stay in ${city.name}`}</b>
              <SortingForm onSortChange={handleSortChange}/>
              <OffersList offers={currentCityOffers} onActiveOfferChange={setActiveOfferId} className='cities__places-list places__list tabs__content'/>
            </section>
            <div className="cities__right-section">
              <Map city={city} offers={currentCityOffers} selectedOffer={activeOffer} className={'cities__map'}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
