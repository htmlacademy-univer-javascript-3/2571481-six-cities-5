import { AppRoute, AuthStatus } from '@const';
import { useAppSelector } from '@hooks/index';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  children: JSX.Element;
}

export function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authStatus = useAppSelector((state) => state.authStatus);
  return (
    authStatus === AuthStatus.Auth ? children : <Navigate to={AppRoute.Login}/>
  );
}
