import { LoginPage } from '@pages/login-pages/login-page';
import { MainPage } from '@pages/main-pages/main-page';
import { NotFoundPage } from '@pages/notfound-page';
import { OfferPage } from '@pages/offer-pages/offer-page';
import {Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import { PrivateRoute } from '@components/private-route';
import { FavoritesPage } from '@pages/favorites-pages/favorites-page';
import { useAppSelector } from '@hooks/index';
import { LoadingScreen } from '@pages/loading-screen/loading-screen';
import HistoryRouter from './history-route';
import browserHistory from '../browser-history';
import { getOffersDataLoadingStatus } from '@store/offers-data/offers-data.selectors';

export function App(): JSX.Element {
  const isDataLoading = useAppSelector(getOffersDataLoadingStatus);

  if (isDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path='/' element =
            {
              <MainPage/>
            }
          />
          <Route path='login' element = {<LoginPage/>}/>
          <Route path='offer/:id' element =
            {
              <OfferPage/>
            }
          />
          <Route path='favorites' element =
            {
              <PrivateRoute>
                <FavoritesPage/>
              </PrivateRoute>
            }
          />
          <Route path='*' element = {<NotFoundPage/>}/>
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}
