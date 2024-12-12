import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '@const';
import { useAppSelector } from '@hooks/index';
import { getAuthStatus } from '@store/user-process/user-process.selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const isAuthorised = useAppSelector(getAuthStatus) === AuthStatus.Auth;
  return (
    isAuthorised ? children : <Navigate to={AppRoute.Login}/>
  );
}

export default PrivateRoute;
