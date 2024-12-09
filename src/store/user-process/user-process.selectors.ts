import { Offers } from '@appTypes/offer';
import { State } from '@appTypes/state';
import { User } from '@appTypes/user';
import { NameSpace } from '@const';
import { AuthStatus } from '@const';

export const getAuthStatus = (state: State): AuthStatus => state[NameSpace.User].authStatus;
export const getUser = (state: State): User | null => state[NameSpace.User].user;
export const getFavorites = (state: State): Offers | null => state[NameSpace.User].favorites;
export const getUserDataLoadingStatus = (state: State): boolean => state[NameSpace.User].isUserDataLoding;