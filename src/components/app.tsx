import {Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import HistoryRouter from './history-route';
import browserHistory from '../browser-history';
import LoginPage from '@pages/login-page/login-page';
import MainPage from '@pages/main-page/main-page';
import NotFoundPage from '@pages/not-found-page/not-found-page';
import OfferPage from '@pages/offer-page/offer-page';
import FavoritesPage from '@pages/favorites-page/favorites-page';
import LoadingScreen from '@pages/loading-screen/loading-screen';
import PrivateRoute from '@components/private-route';
import { useAppSelector } from '@hooks/index';
import { getOffersDataLoadingStatus } from '@store/offers-data/offers-data.selectors';
import { getUserDataLoadingStatus } from '@store/user-process/user-process.selectors';

function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);
  const isUserDataLoading = useAppSelector(getUserDataLoadingStatus);

  if (isOffersDataLoading || isUserDataLoading) {
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

export default App;
