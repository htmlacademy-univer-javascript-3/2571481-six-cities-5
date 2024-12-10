import React from 'react';
import { AppRoute } from '@const';
import { Link } from 'react-router-dom';

const LoginHeader = (): JSX.Element => {
  return (
    <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Link className="header__logo-link" to={AppRoute.MainPage}>
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
          </Link>
        </div>
      </div>
    </div>
  </header>
  );
};

export default React.memo(LoginHeader, () => true);
