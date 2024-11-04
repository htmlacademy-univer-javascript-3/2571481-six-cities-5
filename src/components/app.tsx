import { LoginPage } from '@/pages/login-pages/login-page';
import { MainPage } from '@/pages/main-pages/main-page';
import { NotFoundPage } from '@/pages/notfound-page';
import { OfferPage } from '@/pages/offer-pages/offer-page';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { PrivateRoute } from '@/components/private-route';
import { AuthStatus } from '@/constants-and-types/types';
import { FavoritesPage } from '@/pages/favorites-pages/favorites-page';

export function App(): JSX.Element{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<MainPage/>}/>
        <Route path='login' element = {<LoginPage/>}/>
        <Route path='offer/:id' element = {<OfferPage/>}/>
        <Route path='favorites' element = {
          <PrivateRoute authStatus={AuthStatus.NotAuth}>
            <FavoritesPage/>
          </PrivateRoute>
          }
        />
        <Route path='*' element = {<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
