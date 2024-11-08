import { AuthStatus } from '@/constants';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  authStatus: AuthStatus;
  children: JSX.Element;
}

export function PrivateRoute({authStatus, children}: PrivateRouteProps): JSX.Element {
  return (
    authStatus === AuthStatus.Auth ? children : <Navigate to='/login'/>
  );
}
