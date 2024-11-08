import { LoginPage } from '@/pages/login-pages/login-page';
import { MainPage } from '@/pages/main-pages/main-page';
import { NotFoundPage } from '@/pages/notfound-page';
import { OfferPage } from '@/pages/offer-pages/offer-page';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import { PrivateRoute } from '@/components/private-route';
import { AuthStatus } from '@/constants';
import { FavoritesPage } from '@/pages/favorites-pages/favorites-page';
import { Offers } from '@/types/offer';

type AppProps = {
  placesCount: number;
  offers: Offers;
}

export function App({ placesCount, offers }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element =
            {
              <MainPage
                placesCount={placesCount}
                offers={offers}
              />
            }
          />
          <Route path='login' element = {<LoginPage/>}/>
          <Route path='offer/:id' element =
            {
              <OfferPage
                offers={offers}
              />
            }
          />
          <Route path='favorites' element =
            {
              <PrivateRoute authStatus={AuthStatus.Auth}>
                <FavoritesPage
                  offers={offers}
                />
              </PrivateRoute>
            }
          />
          <Route path='*' element = {<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
