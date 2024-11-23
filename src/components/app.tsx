import { LoginPage } from '@pages/login-pages/login-page';
import { MainPage } from '@pages/main-pages/main-page';
import { NotFoundPage } from '@pages/notfound-page';
import { OfferPage } from '@pages/offer-pages/offer-page';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import { PrivateRoute } from '@components/private-route';
import { AuthStatus } from '@const';
import { FavoritesPage } from '@pages/favorites-pages/favorites-page';
import { useAppDispatch, useAppSelector } from '@hooks/index';
import { setOffersList } from '@store/action';

export function App(): JSX.Element {
  const offers = useAppSelector((state) => state.offersList);
  const dispatch = useAppDispatch();
  dispatch(setOffersList(offers));

  return (
    <HelmetProvider>
      <BrowserRouter>
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
              <PrivateRoute authStatus={AuthStatus.Auth}>
                <FavoritesPage/>
              </PrivateRoute>
            }
          />
          <Route path='*' element = {<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
