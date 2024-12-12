import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import LoginHeader from './login-header';
import LoginPicSection from './login-pic-section';
import LogInForm from './login-form';
import { useAppSelector } from '@hooks/index';
import { AppRoute, AuthStatus } from '@const';
import { getAuthStatus } from '@store/user-process/user-process.selectors';

function LoginPage(): JSX.Element{
  const navigateTo = useNavigate();
  const authStatus = useAppSelector(getAuthStatus);

  useEffect(() => {
    if(authStatus === AuthStatus.Auth) {
      navigateTo(AppRoute.MainPage);
    }
  }, [navigateTo, authStatus]);

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

export default LoginPage;
