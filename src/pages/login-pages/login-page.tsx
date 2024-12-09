import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { LogInForm } from './login-form';
import { useAppDispatch, useAppSelector } from '@hooks/index';
import { AppRoute, AuthStatus } from '@const';
import { redirectToRoute } from '@store/action';
import { Cities } from '@appTypes/city';
import { getAuthStatus } from '@store/user-process/user-process.selectors';
import { changeCity } from '@store/engine-process/engine-process';

export function LoginPage(): JSX.Element{
  const dispatch = useAppDispatch();
  const randomCity = Cities[Math.floor(Math.random() * 6)];
  const authStatus = useAppSelector(getAuthStatus);

  if(authStatus === AuthStatus.Auth) {
    dispatch(redirectToRoute(AppRoute.MainPage));
  }

  const handleClick = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();
    dispatch(changeCity(randomCity));
    dispatch(redirectToRoute(AppRoute.MainPage));
  };

  return(
    <div className="page page--gray page--login">
      <Helmet>
        <title>Log In</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={'/'}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LogInForm/>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" onClick={handleClick} to='/'>
                <span>{randomCity.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
