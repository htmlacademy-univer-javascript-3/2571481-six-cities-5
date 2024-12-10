import { Helmet } from 'react-helmet-async';
import { LogInForm } from './login-form';
import { useAppDispatch, useAppSelector } from '@hooks/index';
import { AppRoute, AuthStatus } from '@const';
import { redirectToRoute } from '@store/action';
import { getAuthStatus } from '@store/user-process/user-process.selectors';
import LoginHeader from './login-header';
import LoginPicSection from './login-pic-section';

export function LoginPage(): JSX.Element{
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);

  if(authStatus === AuthStatus.Auth) {
    dispatch(redirectToRoute(AppRoute.MainPage));
  }

  return(
    <div className="page page--gray page--login">
      <Helmet>
        <title>Log In</title>
      </Helmet>
      <LoginHeader/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LogInForm/>
          </section>
          <LoginPicSection/>
        </div>
      </main>
    </div>
  );
}
