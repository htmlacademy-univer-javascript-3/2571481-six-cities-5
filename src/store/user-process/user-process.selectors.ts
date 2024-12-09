import { State } from '@appTypes/state';
import { User } from '@appTypes/user';
import { NameSpace } from '@const';
import { AuthStatus } from '@const';

export const getAuthStatus = (state: State): AuthStatus => state[NameSpace.User].authStatus;
export const getUser = (state: State): User | null => state[NameSpace.User].user;
