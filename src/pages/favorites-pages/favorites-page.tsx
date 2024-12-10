import Header from '@components/header';
import { OffersList } from '@components/offersList';
import { AppRoute, CardType } from '@const';
import { useAppDispatch, useAppSelector } from '@hooks/index';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FavoritesEmpty } from './favorites-empty-page';
import { Cities, City } from '@appTypes/city';
import { redirectToRoute } from '@store/action';
import { changeCity } from '@store/engine-process/engine-process';
import { getFavorites } from '@store/user-process/user-process.selectors';
import { LoadingScreen } from '@pages/loading-screen/loading-screen';

export function FavoritesPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(getFavorites);
  const cities = Cities;

  const handleCityClick = (city: City) => (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(changeCity(city));
    dispatch(redirectToRoute(AppRoute.MainPage));
  };

  if (!favorites) {
    return <LoadingScreen/>;
  }

  return (
    <div className="page">
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favorites.length > 0 ? (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {cities.map((city) => {
                  const cityFavorites = favorites.filter(
                    (favorite) => favorite.city.name === city.name);
                  return (
                    cityFavorites.length > 0 && (
                      <li key={city.name} className="favorites__locations-items">
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <Link
                              className="locations__item-link"
                              onClick={handleCityClick(city)}
                              to={AppRoute.MainPage}
                            >
                              <span>{city.name}</span>
                            </Link>
                          </div>
                        </div>
                        <OffersList
                          offers={cityFavorites}
                          onActiveOfferChange={() => {}}
                          cardType={CardType.Favorites}
                          className="favorites__places"
                        />
                      </li>)
                  );
                })}
              </ul>
            </section>) : (<FavoritesEmpty />)}
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.MainPage}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </Link>
      </footer>
    </div>
  );
}
