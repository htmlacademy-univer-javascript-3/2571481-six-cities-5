import { memo } from 'react';
import { AppRoute, AuthStatus } from '@const';
import { useAppDispatch, useAppSelector } from '@hooks/index';
import { logoutAction } from '@store/api-actions';
import { getFavoritesCount } from '@store/offers-data/offers-data.selectors';
import { getAuthStatus, getUser } from '@store/user-process/user-process.selectors';
import { Link } from 'react-router-dom';

function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoritesCount = useAppSelector(getFavoritesCount);
  const user = useAppSelector(getUser);
  const isAuthorised = useAppSelector(getAuthStatus) === AuthStatus.Auth;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuthorised && (
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                      <img className="user__avatar" src={user?.avatarUrl} alt="user_avatar" />
                    </div>
                    <span className="header__user-name user__name">{user?.email}</span>
                    <span className="header__favorite-count">{favoritesCount}</span>
                  </Link>
                </li>
              )}
              <li className="header__nav-item">
                {isAuthorised ? (
                  <Link
                    className="header__nav-link"
                    onClick={(evt) => {
                      evt.preventDefault();
                      dispatch(logoutAction());
                    }}
                    to={AppRoute.MainPage}
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                ) : (
                  <Link className="header__nav-link" to={AppRoute.Login}>
                    <span className="header__signout">Sign in</span>
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

const MemoizedHeader = memo(Header);
export default MemoizedHeader;
