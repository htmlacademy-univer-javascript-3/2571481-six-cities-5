import { store } from '@store/index';

import { Offers, SingleOffer } from './offer';
import { Reviews } from './review';
import { AuthStatus } from '@const';
import { City } from './city';
import { User } from './user';


export type EngineProcess = {
    city: City;
    error: string | null;
};

export type UserProcess = {
    authStatus: AuthStatus;
    user: User | null;
    favorites: Offers;
    isUserDataLoding: boolean;
};

export type SingleOfferData = {
    singleOffer: SingleOffer | null;
    nearbyOffers: Offers;
    reviews: Reviews;
    isSingleOfferDataLoading: boolean;
    isReviewPosting: boolean;
    isFormAccepted: boolean;
};

export type OffersData = {
    offersList: Offers;
    favoritesCount: number;
    isOffersDataLoading: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
