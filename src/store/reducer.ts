import { createReducer } from '@reduxjs/toolkit';
import { setOffersList, changeCity, setReviews, setOffersDataLoadingStatus, requireAuth, setSingleOffer, setSingleOfferDataLoadingStatus, setNearbyOffers } from './action';
import { Offers, SingleOffer } from '@appTypes/offer';
import { Reviews } from '@appTypes/review';
import { Cities, City } from '@appTypes/city';
import { AuthStatus } from '@const';

type StateType = {
  city: City;
  offersList: Offers;
  reviews: Reviews;
  nearbyOffers: Offers;
  isOffersDataLoading: boolean;
  isSingleOfferDataLoading: boolean;
  authStatus: AuthStatus;
  singleOffer: SingleOffer | null;
};

const initialState: StateType = {
  city: Cities[0],
  offersList: [],
  reviews: [],
  nearbyOffers: [],
  isOffersDataLoading: false,
  isSingleOfferDataLoading: false,
  authStatus: AuthStatus.Unknown,
  singleOffer: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(setOffersList, (state, { payload }) => {
      state.offersList = payload;
    })
    .addCase(setSingleOffer, (state, { payload }) => {
      state.singleOffer = payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setSingleOfferDataLoadingStatus, (state, action) => {
      state.isSingleOfferDataLoading = action.payload;
    })
    .addCase(setReviews, (state, { payload }) => {
      state.reviews = payload;
    })
    .addCase(setNearbyOffers, (state, { payload }) => {
      state.nearbyOffers = payload;
    })
    .addCase(requireAuth, (state, action) => {
      state.authStatus = action.payload;
    });
});
