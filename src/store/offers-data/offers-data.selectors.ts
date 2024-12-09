import { Offers } from '@appTypes/offer';
import { State } from '@appTypes/state';
import { NameSpace } from '@const';

export const getOffers = (state: State): Offers => state[NameSpace.Offers].offersList;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isOffersDataLoading;
export const getFavoritesCount = (state: State): number => state[NameSpace.Offers].favoritesCount;
