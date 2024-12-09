import { Offers, SingleOffer } from '@appTypes/offer';
import { Reviews } from '@appTypes/review';
import { State } from '@appTypes/state';
import { NameSpace } from '@const';

export const getSingleOffer = (state: State): SingleOffer | null => state[NameSpace.SingleOffer].singleOffer;
export const getNearbyOffers = (state: State): Offers => state[NameSpace.SingleOffer].nearbyOffers;
export const getReviews = (state: State): Reviews => state[NameSpace.SingleOffer].reviews;
export const getSingleOfferDataLoadingStatus = (state: State): boolean => state[NameSpace.SingleOffer].isSingleOfferDataLoading;
